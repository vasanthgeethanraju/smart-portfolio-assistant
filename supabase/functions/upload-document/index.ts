import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Validation constants
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
const MAX_CONTENT_LENGTH = 100000; // 100k characters
const FILENAME_REGEX = /^[a-zA-Z0-9._-]+$/;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fileName, content } = await req.json();
    
    // Input validation
    if (!fileName || !content) {
      return new Response(
        JSON.stringify({ error: 'Missing fileName or content' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate filename format
    if (!FILENAME_REGEX.test(fileName)) {
      return new Response(
        JSON.stringify({ error: 'Invalid filename. Use only alphanumeric characters, dots, hyphens, and underscores.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate content length
    if (content.length > MAX_CONTENT_LENGTH) {
      return new Response(
        JSON.stringify({ error: `Content too large. Maximum ${MAX_CONTENT_LENGTH} characters allowed.` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Estimate file size (rough approximation)
    const estimatedSize = new Blob([content]).size;
    if (estimatedSize > MAX_FILE_SIZE) {
      return new Response(
        JSON.stringify({ error: 'File size exceeds 10MB limit' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Document upload attempt');

    // Store document in database (no user_id required for public access)
    const { data, error } = await supabase
      .from('documents')
      .insert({ 
        file_name: fileName, 
        content
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      throw new Error('Failed to store document');
    }

    console.log('Document stored successfully:', data.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Document uploaded and processed successfully',
        documentId: data.id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Upload error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
