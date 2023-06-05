
import { DataSource } from 'typeorm'
import 'reflect-metadata'
import { Paciente } from './pacientes/pacienteEntity.js'
import { Endereco } from './enderecos/enderecoEntity.js'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/database/database.sqlite', // caminho para o arquivo do banco de dados SQLite
  synchronize: true,
  logging: false,
  entities: [Paciente, Endereco],
  migrations: [],
  subscribers: []
})
