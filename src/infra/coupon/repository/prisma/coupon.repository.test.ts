import prisma from '../../../../../libs/__mocks__/prisma'
import CouponRepository from './coupon.repository'
import { expect, test, vi } from 'vitest'

vi.mock('../../../../../libs/prisma')

const repository = new CouponRepository()

test('createCoupon', async () => {
  const coupon = { code: 'VALE20TEST', percentage: 30 }

  prisma.coupon.create.mockResolvedValue({ ...coupon, id: '123' })

  const createCoupon = await repository.createCoupon(coupon)

  await expect(createCoupon).toStrictEqual({
    ...coupon,
    id: expect.anything()
  })
})

test('$transaction', async () => {
  const coupon = { code: 'VALE20TEST', percentage: 30 }

  const mockResponse = [{ ...coupon, id: '123' }, 1]
  prisma.$transaction.mockResolvedValue(mockResponse)

  const data = await repository.createCouponAndCountAll(coupon)

  expect(data).toStrictEqual({
    newCoupon: mockResponse[0],
    count: mockResponse[1]
  })
})

test('getCoupons', async () => {
  const coupon = { id: '123', code: 'VALE20', percentage: 30 }

  prisma.coupon.findMany.mockResolvedValue([coupon])

  const getAllCoupons = await repository.getCoupons()

  expect(getAllCoupons).toStrictEqual([
    { id: '123', code: 'VALE20', percentage: 30 }
  ])
  expect(getAllCoupons).toHaveLength(1)
})

test('getCouponById', async () => {
  prisma.coupon.findUniqueOrThrow.mockImplementation(() => {
    throw new Error('There was an error')
  })

  await expect(repository.getCouponById('1')).rejects.toThrow()
  await expect(repository.getCouponById('1')).rejects.toThrowError(
    'There was an error'
  )
})

test('updateCoupon', async () => {
  const coupon = { id: '123', code: 'VALE20', percentage: 30 }
  prisma.coupon.update.mockResolvedValue(coupon)

  await repository.updateCoupon('123', { ...coupon, code: 'VALE30' })

  expect(prisma.coupon.update).toHaveBeenCalled()
  expect(prisma.coupon.update).toHaveBeenCalledWith({
    where: { id: '123' },
    data: {
      ...coupon,
      code: 'VALE30'
    }
  })
})
