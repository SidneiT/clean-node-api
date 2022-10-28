import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.setHeader('acccess-control-allow-origin', '*')
  res.setHeader('acccess-control-allow-methods', '*')
  res.setHeader('acccess-control-allow-headers', '*')
  next()
}
