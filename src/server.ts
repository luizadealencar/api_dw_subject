/* eslint-disable @typescript-eslint/no-misused-promises */
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import 'reflect-metadata'
import rotaAuth from './auth/authRoutes.js'
import { AppDataSource } from './data-source.js'
import rotaPaciente from './pacientes/pacienteRoutes.js'
import errorMiddleware from './error/errorMiddleware.js'

dotenv.config({ path: '.env' })

const app = express()

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST'
  ],

  allowedHeaders: [
    'Content-Type'
  ]
}

app.use(cors(corsOpts))

app.use(express.json())

AppDataSource.initialize()
  .then(() => {
    console.log('App Data Source inicializado')
  })
  .catch((error) => {
    console.error(error)
  })

rotaPaciente(app)
rotaAuth(app)
app.use(errorMiddleware)
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
app.listen(process.env.SERVER_PORT, () => { console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}`) }
)

export default app