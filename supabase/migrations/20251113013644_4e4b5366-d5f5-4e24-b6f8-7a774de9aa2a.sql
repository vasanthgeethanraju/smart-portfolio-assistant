-- Make documents table publicly readable
DROP POLICY IF EXISTS "Users can view their own documents" ON documents;
DROP POLICY IF EXISTS "Users can insert their own documents" ON documents;
DROP POLICY IF EXISTS "Users can update their own documents" ON documents;
DROP POLICY IF EXISTS "Users can delete their own documents" ON documents;

CREATE POLICY "Anyone can view documents"
  ON documents FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert documents"
  ON documents FOR INSERT
  WITH CHECK (true);

-- Keep profiles private (not used without auth anyway)
-- Remove the user_id NOT NULL constraint from documents since we won't have users
ALTER TABLE documents ALTER COLUMN user_id DROP NOT NULL;