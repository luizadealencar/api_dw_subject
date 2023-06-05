import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation
} from 'typeorm'
import { Endereco } from '../enderecos/enderecoEntity.js'

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column('varchar', { length: 11 })
    cpf: string

  @Column('varchar', { length: 100 })
    nome: string

  @Column('varchar', { length: 100 })
    email: string

  @Column('varchar', { length: 100, select: false })
    senha: string

  @OneToOne(() => Endereco, {
    cascade: ['update']
  })
  @JoinColumn({ referencedColumnName: 'id' })
    endereco: Relation<Endereco>

  @Column({ type: 'int' })
    telefone: number

  @Column({ type: 'boolean', default: true })
    estaAtivo: boolean

  @Column({ type: 'boolean', default: true })
    possuiPlanoSaude: boolean

  @Column({ type: 'simple-array', nullable: true })
    planosSaude: string

  @Column({ type: 'simple-array', nullable: true })
    historico: string

  constructor (
    cpf,
    nome,
    email,
    senha,
    telefone,
    planosSaude,
    estaAtivo,
    historico
  ) {
    this.cpf = cpf
    this.nome = nome
    this.email = email
    this.estaAtivo = estaAtivo
    this.senha = senha
    this.telefone = telefone
    this.planosSaude = planosSaude
    this.historico = historico
  }
}
