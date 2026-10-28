-- Documents feed the chat system prompt, so only the owner (via the SQL editor / service role) may write them
DROP POLICY IF EXISTS "Anyone can insert documents" ON public.documents;
DROP POLICY IF EXISTS "Anyone can upload documents" ON public.documents;
