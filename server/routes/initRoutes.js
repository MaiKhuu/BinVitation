import dotenv from 'dotenv'
import url from 'url'
import path from 'path'
import pg from 'pg'
import fs from 'fs'
import express from 'express'

const router = express.Router()

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: `${__dirname}/../../.env` })

const DATABASE_URL = process.env.DATABASE_URL
const INIT_FILE = 'database/db_init.sql'

const pool = new pg.Pool({
  connectionString: DATABASE_URL
})

router.post('/init', async (req, res) => {
  try {
    console.log('Initializing SQL schema')

    const fileContent = fs.readFileSync(INIT_FILE).toString()
    const statements = fileContent.replace(/(\r\n|\n|\r)/gm, '').split(';')

    for (let i = 0; i < statements.length; i++) {
      console.log(statements[i])
      await pool.query(statements[i])
    }

    console.log('✅ SQL init finished')
  } catch (err) {
    console.log('❌ Error running schema initialization')
  }
})

export default router
