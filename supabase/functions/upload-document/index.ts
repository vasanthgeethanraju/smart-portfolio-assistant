import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fileName, content } = await req.json();
    
    if (!fileName || !content) {
      return new Response(
        JSON.stringify({ error: 'Missing fileName or content' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store document in database
    const { data, error } = await supabase
      .from('documents')
      .insert({ file_name: fileName, content })
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
