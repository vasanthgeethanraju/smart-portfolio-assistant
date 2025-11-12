-- Create table for storing uploaded documents
CREATE TABLE public.documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  file_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (so AI can access documents)
CREATE POLICY "Documents are viewable by everyone" 
ON public.documents 
FOR SELECT 
USING (true);

-- Create policy for insert (anyone can upload)
CREATE POLICY "Anyone can upload documents" 
ON public.documents 
FOR INSERT 
WITH CHECK (true);