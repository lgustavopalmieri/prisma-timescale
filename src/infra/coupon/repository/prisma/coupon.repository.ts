import prisma from '../../../../../libs/prisma'
import type Coupon from '../../../../domain/coupon/entity/coupon'
import type CouponRepositoryInterface from '../../../../domain/coupon/repository/coupon-repository.interface'

export default class CouponRepository
  implements CouponRepositoryInterface<Coupon>
{
  // TODO: Remove return and any type.
  async createCoupon(entity: Coupon): Promise<any> {
    return await prisma.coupon.create({
      data: {
        code: entity.code,
        percentage: entity.percentage
      }
    })
  }

  // TODO: check the return type
  // TODO: revisit article to improve Coupon entity
  async createCouponAndCountAll(entity: Coupon): Promise<any> {
    const [newCoupon, count] = await prisma.$transaction([
      prisma.coupon.create({ data: entity }),
      prisma.coupon.count()
    ])

    return { newCoupon, count }
  }

  // TODO: Insert timestamp like deletedAt
  // Revisit article for example
  async getCoupons(): Promise<Coupon[]> {
    return await prisma.coupon.findMany()
  }

  // TODO: https://www.prisma.io/docs/concepts/components/prisma-client/transactions#sequential-prisma-client-operations
  async getCouponById(id: string): Promise<Coupon> {
    return await prisma.coupon.findUniqueOrThrow({ where: { id: id } })
  }

  // TODO: revisit article to improve this method
  async updateCoupon(id: string, entity: Coupon): Promise<Coupon> {
    const coupon = await prisma.coupon.update({
      where: { id: id },
      data: { ...entity }
    })
    return coupon
  }
}
