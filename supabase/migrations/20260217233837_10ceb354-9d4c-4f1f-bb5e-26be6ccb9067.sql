
-- Create storage bucket for documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to documents bucket
CREATE POLICY "Public read documents storage"
ON storage.objects FOR SELECT
USING (bucket_id = 'documents');

-- Allow anyone to upload to documents bucket
CREATE POLICY "Anyone can upload documents storage"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'documents');

-- Add file_url column to documents table
ALTER TABLE public.documents ADD COLUMN IF NOT EXISTS file_url text;
