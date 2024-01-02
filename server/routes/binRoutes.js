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

router.post('/bins/:id/open', async (req, res) => {
  const id = req.params.id
  if (id === undefined) {
    res.send(BAD_REQUEST_MESSAGE)
  } else {
    try {
      const updateQueryText = 'UPDATE bins SET read = true WHERE id = $1 RETURNING *;'
      const updateQuery = await pool.query(updateQueryText, [id])
      res.send({
        update_count: updateQuery.rowCount,
        ...updateQuery.rows[0]
      })
    } catch (err) {
      res.status(500).send(UNEXPECTED_ERROR)
    }
  }
})

router.delete('/bins/:id', async (req, res) => {
  const id = req.params.id
  if (id === undefined) {
    res.send(BAD_REQUEST_MESSAGE)
  } else {
    try {
      const deleteQueryText = 'DELETE FROM bins WHERE id = $1;'
      const deleteQuery = await pool.query(deleteQueryText, [id])
      res.send({ deleted_count: deleteQuery.rowCount })
    } catch (err) {
      console.log(err)
      res.status(500).send(UNEXPECTED_ERROR)
    }
  }
})

router.post('/bins/:id', async (req, res) => {
  const id = req.params.id
  const payload = req.body
  if (id === undefined) {
    res.send(BAD_REQUEST_MESSAGE)
  } else {
    try {
      const insertQueryText = 'INSERT INTO documents (bin_id, payload) VALUES ($1, $2) RETURNING *;'
      const insertQuery = await pool.query(insertQueryText, [id, payload])
      res.send({
        insert_count: insertQuery.rowCount,
        ...insertQuery.rows[0]
      })
    } catch (err) {
      res.status(500).send(UNEXPECTED_ERROR)
    }
  }
})

router.get('/bins/:id', async (req, res) => {
  const id = req.params.id
  if (id === undefined) {
    res.send(BAD_REQUEST_MESSAGE)
  } else {
    try {
      const binInfoQueryTest = 'SELECT * FROM bins WHERE id = $1;'
      const binInfoQuery = await pool.query(binInfoQueryTest, [id])

      const totalDocsQueryText = 'SELECT count(*) FROM documents WHERE bin_id = $1;'
      const totalDocsQuery = await pool.query(totalDocsQueryText, [id])

      const totalUnreadDocsQueryText = 'SELECT count(*) FROM documents WHERE bin_id = $1 AND read = false;'
      const totalUnreadDocsQuery = await pool.query(totalUnreadDocsQueryText, [id])

      const result = {
        ...binInfoQuery.rows[0],
        total_docs: totalDocsQuery.rows[0].count,
        unread_docs: totalUnreadDocsQuery.rows[0].count
      }

      res.send(result)
    } catch (err) {
      res.status(500).send(UNEXPECTED_ERROR)
    }
  }
})

router.post('/bins', async (req, res) => {
  const name = req.body.name
  if (name === undefined) {
    res.send(BAD_REQUEST_MESSAGE)
  } else {
    try {
      const queryText = `INSERT INTO bins (name) VALUES ('${name}') RETURNING *;`
      const queryResult = await pool.query(queryText)
      res.send(queryResult.rows[0])
    } catch (err) {
      res.status(500).send(UNEXPECTED_ERROR)
    }
  }
})

router.get('/bins', async (req, res) => {
  try {
    const queryResult = await pool.query('SELECT id FROM bins;')
    const result = {
      total: queryResult.rows.length,
      bin_ids: queryResult.rows.map(obj => obj.id)
    }
    res.send(result)
  } catch (err) {
    res.status(500).send('Internal server Error')
  }
})

export default router
