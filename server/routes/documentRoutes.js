import dotenv from 'dotenv'
import url from 'url'
import path from 'path'
import pg from 'pg'
import express from 'express'

const BAD_REQUEST_MESSAGE = {
  error: 'Bad Request',
  message: 'The request is malformed or missing required parameters.'
}

const UNEXPECTED_ERROR = {
  error: 'Unexpected Error',
  message: 'An unexpected error occurred. Please contact support for assistance.'
}

const router = express.Router()

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: `${__dirname}/../../.env` })

const DATABASE_URL = process.env.DATABASE_URL

const pool = new pg.Pool({
  connectionString: DATABASE_URL
})

router.get('/documents/:id', async (req, res) => {
  const id = req.params.id
  if (id === undefined) {
    res.send(BAD_REQUEST_MESSAGE)
  } else {
    try {
      const queryText = 'SELECT * FROM documents WHERE id = $1;'
      const query = await pool.query(queryText, [id])
      res.send(query.rows[0])
    } catch (err) {
      res.status(500).send(UNEXPECTED_ERROR)
    }
  }
})

export default router
