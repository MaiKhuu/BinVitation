import dotenv from 'dotenv'
import url from 'url'
import path from 'path'
import pg from 'pg'
import express from 'express'

const router = express.Router()

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: `${__dirname}/../../.env` })

const DATABASE_URL = process.env.DATABASE_URL

const pool = new pg.Pool({
  connectionString: DATABASE_URL
})

router.get('/bins', async (req, res) => {
  try {
    const queryResult = await pool.query('SELECT * FROM bins;')
    const result = {
      total: queryResult.rows.length,
      bins: queryResult.rows
    }
    res.send(result)
  } catch (err) {
    res.status(500).send('Internal server Error')
  }
})

export default router
