import type { Express } from 'express'
import express from 'express'
import { couponRoute } from './coupon/coupon-post.route'

export const app: Express = express()

app.use(express.json())

app.use('/coupon', couponRoute)
