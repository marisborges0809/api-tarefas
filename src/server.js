import express from 'express'
import { router } from './routes.js'

const app = express()

app.use(express.json()) // substitui seu middleware manual

app.use(router)

app.listen(3000, () => {
  console.log('Servidor rodando com Express 🚀')
})