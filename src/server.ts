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
 
  .catch((error) => {
    console.error(error)
  })

rotaPaciente(app)
rotaAuth(app)
app.use('/', (_, res) => { res.json({ message: 'use /paciente na URL para acessar os pacientes :)' }) })
app.use(errorMiddleware)

app.listen(process.env.SERVER_PORT, () => { console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}`) }
)

export default app
