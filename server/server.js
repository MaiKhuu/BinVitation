import dotenv from 'dotenv'
import url from 'url'
import path from 'path'
import express from 'express'
import initRoutes from './routes/initRoutes.js'
import binRoutes from './routes/binRoutes.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: `${__dirname}/../.env` })

const PORT = process.env.SERVER_PORT
const HOST = process.env.SERVER_HOST

const app = express()

app.use(express.json())
app.use(initRoutes)
app.use(binRoutes)

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to BinVitation API' })
})

app.listen(PORT, HOST, () => {
  console.log(`✅ Server started at ${HOST} port ${PORT}`)
})
