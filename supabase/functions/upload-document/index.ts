import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-upload-password',
};

// Validation constants
const MAX_CONTENT_LENGTH = 100000; // 100k characters
const MAX_FILENAME_LENGTH = 200;

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });

// Compare without leaking how many characters matched through response timing
const passwordsMatch = async (given: string, expected: string) => {
  const encoder = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest('SHA-256', encoder.encode(given)),
    crypto.subtle.digest('SHA-256', encoder.encode(expected)),
  ]);
  const viewA = new Uint8Array(a);
  const viewB = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < viewA.length; i++) diff |= viewA[i] ^ viewB[i];
  return diff === 0;
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const expectedPassword = Deno.env.get('UPLOAD_PASSWORD');
    if (!expectedPassword) {
      console.error('UPLOAD_PASSWORD secret is not set');
      return jsonResponse({ error: 'Uploads are not configured' }, 503);
    }

    const givenPassword = req.headers.get('x-upload-password') ?? '';
    if (!(await passwordsMatch(givenPassword, expectedPassword))) {
      // Slow down password guessing
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return jsonResponse({ error: 'Wrong password' }, 401);
    }

    const { fileName, content } = await req.json();

    // Input validation
    if (!fileName || !content) {
      return jsonResponse({ error: 'Missing fileName or content' }, 400);
    }

    if (fileName.length > MAX_FILENAME_LENGTH) {
      return jsonResponse({ error: `File name too long. Maximum ${MAX_FILENAME_LENGTH} characters allowed.` }, 400);
    }

    if (content.length > MAX_CONTENT_LENGTH) {
      return jsonResponse({ error: `Content too large. Maximum ${MAX_CONTENT_LENGTH} characters allowed.` }, 400);
    }

    // Service role bypasses RLS; the public INSERT policy has been removed
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Document upload attempt');

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

    return jsonResponse({
      success: true,
      message: 'Document uploaded and processed successfully',
      documentId: data.id
    });

  } catch (error) {
    console.error('Upload error:', error);
    return jsonResponse({ error: error instanceof Error ? error.message : 'Unknown error' }, 500);
  }
});
