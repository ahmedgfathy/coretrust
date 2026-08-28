import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SUPABASE_URL = 'https://ppbdfsacfnzenkboazru.supabase.co'
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwYmRmc2FjZm56ZW5rYm9henJ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzkxNjYzOSwiZXhwIjoyMTAzNDkyNjM5fQ.BWoJBuGaQ3HmrsDqAazH7gVWy_qXr-LIPuWaDZQFHgc'

const headers = {
  'apikey': SUPABASE_SERVICE_KEY,
  'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal'
}

async function upsertProjects(projects: any[]) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/projects`, {
    method: 'POST',
    headers: {
      ...headers,
      'Prefer': 'return=representation,resolution=merge-duplicates'
    },
    body: JSON.stringify(projects.map(p => ({
      id: p.id,
      titleEn: p.titleEn,
      titleAr: p.titleAr,
      categoryEn: p.categoryEn,
      categoryAr: p.categoryAr,
      locationEn: p.locationEn,
      locationAr: p.locationAr,
      descriptionEn: p.descriptionEn,
      descriptionAr: p.descriptionAr,
      year: p.year,
      status: p.status,
      image: p.image,
      gallery: p.gallery || [],
      details: p.details || []
    })))
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Projects upsert failed: ${response.status} ${text}`)
  }
  console.log(`Upserted ${projects.length} projects`)
}

async function upsertContent(contentData: any) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/content`, {
    method: 'POST',
    headers: {
      ...headers,
      'Prefer': 'return=representation,resolution=merge-duplicates'
    },
    body: JSON.stringify({
      id: 'main',
      data: contentData,
      updatedAt: new Date().toISOString()
    })
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Content upsert failed: ${response.status} ${text}`)
  }
  console.log('Upserted content')
}

async function seed() {
  console.log('Reading data files...')

  const projectsRaw = readFileSync(join(__dirname, '../src/data/projects.json'), 'utf8')
  const { projects } = JSON.parse(projectsRaw)

  const contentRaw = readFileSync(join(__dirname, '../src/data/content.json'), 'utf8')
  const contentData = JSON.parse(contentRaw)

  console.log(`Found ${projects.length} projects`)

  await upsertProjects(projects)
  await upsertContent(contentData)

  console.log('Seed complete!')
}

seed().catch(err => {
  console.error('Seed failed:', err)
  process.exit(1)
})
