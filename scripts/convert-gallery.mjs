import path from 'node:path'
import { promises as fs } from 'node:fs'
import sharp from 'sharp'

const galleryRoot = path.join(process.cwd(), 'public', 'gallery')

async function ensureAvifVersions(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      await ensureAvifVersions(entryPath)
      continue
    }

    if (!entry.isFile() || !entry.name.toLowerCase().endsWith('.webp')) continue

    const avifPath = entryPath.replace(/\.webp$/i, '.avif')

    try {
      await fs.access(avifPath)
      // .avif version already exists, skip conversion
      continue
    } catch {
      // file does not exist, fall through to conversion
    }

    await sharp(entryPath)
      .toFormat('avif', { quality: 60 })
      .toFile(avifPath)
  }
}

ensureAvifVersions(galleryRoot)
  .then(() => {
    console.log('AVIF conversion complete.')
  })
  .catch((error) => {
    console.error('Failed to convert gallery to AVIF:', error)
    process.exitCode = 1
  })
