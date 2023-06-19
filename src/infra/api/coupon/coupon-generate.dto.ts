import type { Request } from 'express'

export const couponGeneratePostDto = (request: Request) => {
  return {
    code: request.body.code,
    percentage: request.body.percentage
  }
}
