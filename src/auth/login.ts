import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'

import { AppDataSource } from '../data-source.js'
import { decryptPassword } from '../utils/senhaUtils.js'
import { AppError } from '../error/ErrorHandler.js'
import { Paciente } from '../pacientes/pacienteEntity.js'

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, senha } = req.body

  const paciente = await AppDataSource.manager.findOne(Paciente, {
    select: ['id', 'senha'],
    where: { email }
  })

  if (paciente == null) {
    throw new AppError('Não encontrado!', 404)
  } else {
    const { id, senha: senhaAuth } = paciente
    const senhaCorrespondente = decryptPassword(senhaAuth)

    if (senha !== senhaCorrespondente) {
      throw new AppError('Senha incorreta!', 401)
    }

    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 86400
    }) // expira em 24 horas

    res.status(200).json({
      auth: true,
      message: 'Autenticado com sucesso!',
      token
    })
  }
}

export const logout = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({ auth: false, token: null })
}
