import { Express } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import express from 'express'

export function middlewares(app: Express) {
  app.use(cors())
  app.use(morgan('dev'))
  app.use(express.json({ limit: '10mb' }))
}
