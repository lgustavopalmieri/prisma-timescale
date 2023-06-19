import type { Request, Response } from 'express'
import express from 'express'

import { couponGeneratePostDto } from './coupon-generate.dto'
import CouponRepository from 'infra/coupon/repository/prisma/coupon.repository'
import CreateCouponUseCase from 'usecase/coupon/create/create.coupon.usecase'

export const couponRoute = express.Router()

couponRoute.post('/', async (req: Request, res: Response) => {
  const usecase = new CreateCouponUseCase(new CouponRepository())

  try {
    const output = await usecase.execute(couponGeneratePostDto(req))

    res.send(output)
  } catch (err) {
    res.status(500).send(err)
  }
})
