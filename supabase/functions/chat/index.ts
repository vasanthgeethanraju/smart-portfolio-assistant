// @ts-nocheck
/* eslint-disable */

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
    const { messages } = await req.json();
    
    // Initialize Supabase client for public access
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get all documents from database (public access)
    const { data: documents, error: dbError } = await supabase
      .from('documents')
      .select('*')
      .order('created_at', { ascending: false });

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to fetch documents');
    }

    // Find the most recent resume document (by created_at)
    const mostRecentResume = documents && documents.length > 0 ? documents[0] : null;

    // Build context from documents
    let context = '';
    if (documents && documents.length > 0) {
      context = '\n\nContext from uploaded documents:\n\n';
      documents.forEach(doc => {
        context += `--- ${doc.file_name} (uploaded: ${doc.created_at}) ---\n${doc.content}\n\n`;
      });
    }

    // Include download link info if available
    let downloadInfo = '';
    if (mostRecentResume?.file_url) {
      downloadInfo = `\n\nMost recent resume file: "${mostRecentResume.file_name}" (uploaded ${mostRecentResume.created_at})
Download URL: ${mostRecentResume.file_url}

IMPORTANT: When anyone asks to download the resume, get the resume, or requests a link to the resume/CV, 
always respond with a markdown link like this: [Download ${mostRecentResume.file_name}](${mostRecentResume.file_url})`;
    }

    // System prompt with document context
    const systemPrompt = `You are an AI assistant representing a professional based on their resume and portfolio documents. 
Your role is to answer questions from recruiters about the candidate's experience, skills, projects, and qualifications.

Be professional, concise, and accurate. Only provide information based on the documents provided.
If you don't have information about something, politely say so.${context}${downloadInfo}`;

    // Call configured AI provider (default: OpenAI compatible endpoint)
    const AI_API_KEY = Deno.env.get('AI_API_KEY');
    if (!AI_API_KEY) {
      throw new Error('AI_API_KEY not configured');
    }

    const AI_API_URL = Deno.env.get('AI_API_URL') ?? 'https://api.openai.com/v1/chat/completions';
    const AI_MODEL = Deno.env.get('AI_MODEL') ?? 'gpt-4o-mini';

    const response = await fetch(AI_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('AI Gateway error:', response.status, error);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits depleted. Please add credits to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error('AI Gateway request failed');
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ message: assistantMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Chat error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
