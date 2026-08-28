import pg from 'pg'

const DATABASE_URL = 'postgres://postgres.ppbdfsacfnzenkboazru:PFnzA6FZuSnyt8rC@aws-0-us-east-1.pooler.supabase.com:6543/postgres'

const sql = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  "titleEn" TEXT NOT NULL DEFAULT '',
  "titleAr" TEXT NOT NULL DEFAULT '',
  "categoryEn" TEXT NOT NULL DEFAULT '',
  "categoryAr" TEXT NOT NULL DEFAULT '',
  "locationEn" TEXT NOT NULL DEFAULT '',
  "locationAr" TEXT NOT NULL DEFAULT '',
  "descriptionEn" TEXT NOT NULL DEFAULT '',
  "descriptionAr" TEXT NOT NULL DEFAULT '',
  "year" TEXT NOT NULL DEFAULT '',
  "status" TEXT NOT NULL DEFAULT 'current',
  "image" TEXT NOT NULL DEFAULT '',
  "gallery" JSONB DEFAULT '[]'::jsonb,
  "details" JSONB DEFAULT '[]'::jsonb,
  "createdAt" TIMESTAMPTZ DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS content (
  id TEXT PRIMARY KEY DEFAULT 'main',
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  "updatedAt" TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public read projects' AND tablename = 'projects') THEN
    CREATE POLICY "Public read projects" ON projects FOR SELECT USING (true);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public read content' AND tablename = 'content') THEN
    CREATE POLICY "Public read content" ON content FOR SELECT USING (true);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Auth all projects' AND tablename = 'projects') THEN
    CREATE POLICY "Auth all projects" ON projects FOR ALL USING (auth.role() = 'authenticated');
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Auth all content' AND tablename = 'content') THEN
    CREATE POLICY "Auth all content" ON content FOR ALL USING (auth.role() = 'authenticated');
  END IF;
END $$;
`

async function migrate() {
  const client = new pg.Client({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    family: 4
  })
  await client.connect()
  try {
    await client.query(sql)
    console.log('Migration complete!')
  } catch (err) {
    console.error('Migration failed:', err)
  } finally {
    await client.end()
  }
}

migrate()
