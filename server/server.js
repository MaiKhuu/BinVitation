import express from 'express'
import dotenv from 'dotenv'
import url from 'url'
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: `${__dirname}/../.env` })

const PORT = process.env.SERVER_PORT
const HOST = process.env.SERVER_HOST
const app = express()

app.listen(PORT, HOST, () => {
  console.log(`Server started at ${HOST} port ${PORT}`)
})
