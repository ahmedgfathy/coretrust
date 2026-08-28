import pg from 'pg'

const DATABASE_URL = 'postgres://postgres.ppbdfsacfnzenkboazru:PFnzA6FZuSnyt8rC@aws-0-us-east-1.pooler.supabase.com:6543/postgres'

const sql = `
-- Storage policies for images bucket
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public read images' AND tablename = 'objects') THEN
    CREATE POLICY "Public read images" ON storage.objects
      FOR SELECT USING (bucket_id = 'images');
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Auth insert images' AND tablename = 'objects') THEN
    CREATE POLICY "Auth insert images" ON storage.objects
      FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Auth delete images' AND tablename = 'objects') THEN
    CREATE POLICY "Auth delete images" ON storage.objects
      FOR DELETE USING (bucket_id = 'images' AND auth.role() = 'authenticated');
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Auth update images' AND tablename = 'objects') THEN
    CREATE POLICY "Auth update images" ON storage.objects
      FOR UPDATE USING (bucket_id = 'images' AND auth.role() = 'authenticated');
  END IF;
END $$;
`

async function setup() {
  const client = new pg.Client({ connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false }, family: 4 })
  await client.connect()
  try {
    await client.query(sql)
    console.log('Storage policies created!')
  } catch (err) {
    console.error('Setup failed:', err)
  } finally {
    await client.end()
  }
}

setup()
