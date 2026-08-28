import pg from 'pg'
import { readFileSync, readdirSync } from 'fs'
import { join, extname, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATABASE_URL = 'postgres://postgres.ppbdfsacfnzenkboazru:PFnzA6FZuSnyt8rC@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
const SUPABASE_URL = 'https://ppbdfsacfnzenkboazru.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwYmRmc2FjZm56ZW5rYm9henJ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzkxNjYzOSwiZXhwIjoyMTAzNDkyNjM5fQ.BWoJBuGaQ3HmrsDqAazH7gVWy_qXr-LIPuWaDZQFHgc'
const IMAGES_DIR = join(__dirname, '../public/images')

const ALLOWED_EXT = ['.jpg', '.jpeg', '.png', '.gif', '.webp']

async function uploadImage(filename: string, filepath: string): Promise<string> {
  const fileBuffer = readFileSync(filepath)
  const ext = extname(filename).toLowerCase()
  const storagePath = `projects/${filename}`

  const response = await fetch(`${SUPABASE_URL}/storage/v1/object/images/${storagePath}`, {
    method: 'POST',
    headers: {
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`,
      'Content-Type': 'application/octet-stream',
      'x-upsert': 'true'
    },
    body: fileBuffer
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Upload failed for ${filename}: ${response.status} ${text}`)
  }

  const { data } = await response.json() as any
  return `${SUPABASE_URL}/storage/v1/object/public/images/${storagePath}`
}

async function main() {
  const files = readdirSync(IMAGES_DIR).filter(f => ALLOWED_EXT.includes(extname(f).toLowerCase()))
  console.log(`Found ${files.length} images to upload`)

  // Upload all images
  const urlMap: Record<string, string> = {}
  for (const file of files) {
    const filepath = join(IMAGES_DIR, file)
    try {
      const url = await uploadImage(file, filepath)
      urlMap[`/images/${file}`] = url
      console.log(`  Uploaded: ${file}`)
    } catch (err: any) {
      console.error(`  Failed: ${file} - ${err.message}`)
    }
  }

  console.log(`\nUploaded ${Object.keys(urlMap).length} images`)

  // Update all project records in database
  const client = new pg.Client({ connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false }, family: 4 })
  await client.connect()

  try {
    const { rows: projects } = await client.query('SELECT id, image, gallery FROM projects')

    for (const project of projects) {
      const updates: string[] = []
      const values: any[] = []
      let idx = 1

      // Update main image
      if (project.image && urlMap[project.image]) {
        updates.push(`"image" = $${idx}`)
        values.push(urlMap[project.image])
        idx++
      }

      // Update gallery images
      if (project.gallery && Array.isArray(project.gallery)) {
        const newGallery = project.gallery.map((img: string) => urlMap[img] || img)
        updates.push(`gallery = $${idx}`)
        values.push(JSON.stringify(newGallery))
        idx++
      }

      if (updates.length > 0) {
        values.push(project.id)
        await client.query(
          `UPDATE projects SET ${updates.join(', ')} WHERE id = $${idx}`,
          values
        )
        console.log(`  Updated project ${project.id}`)
      }
    }

    console.log('\nAll project images updated to Supabase Storage URLs!')
  } finally {
    await client.end()
  }
}

main().catch(err => {
  console.error('Failed:', err)
  process.exit(1)
})
