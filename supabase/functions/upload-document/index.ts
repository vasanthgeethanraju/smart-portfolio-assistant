import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Validation constants
const MAX_CONTENT_LENGTH = 100000; // 100k characters
const FILENAME_REGEX = /^[a-zA-Z0-9._\-\s]+$/;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { fileName, content, fileBase64, mimeType } = body;
    
    // Input validation
    if (!fileName || !content) {
      return new Response(
        JSON.stringify({ error: 'Missing fileName or content' }),
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

    // Initialize Supabase client with service role to bypass RLS for storage
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    let fileUrl: string | null = null;

    // Upload the actual file to storage if provided
    if (fileBase64 && mimeType) {
      const fileBytes = Uint8Array.from(atob(fileBase64), c => c.charCodeAt(0));
      const timestamp = Date.now();
      const sanitizedName = fileName.replace(/[^a-zA-Z0-9._\-]/g, '_');
      const storagePath = `${timestamp}_${sanitizedName}`;

      const { data: storageData, error: storageError } = await supabase.storage
        .from('documents')
        .upload(storagePath, fileBytes, {
          contentType: mimeType,
          upsert: false,
        });

      if (storageError) {
        console.error('Storage error:', storageError);
      } else {
        const { data: urlData } = supabase.storage
          .from('documents')
          .getPublicUrl(storageData.path);
        fileUrl = urlData.publicUrl;
      }
    }

    // Store document in database
    const { data, error } = await supabase
      .from('documents')
      .insert({ 
        file_name: fileName, 
        content,
        file_url: fileUrl,
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
        documentId: data.id,
        fileUrl,
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
