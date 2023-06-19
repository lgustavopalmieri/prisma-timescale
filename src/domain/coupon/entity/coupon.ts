import type { CouponInterface } from '../interface/coupon.interfce'

export default class Coupon implements CouponInterface {
  public readonly id?: CouponInterface['id']
  public readonly code: CouponInterface['code']
  public readonly percentage: CouponInterface['percentage']

  constructor({ id, code, percentage }: CouponInterface) {
    this.id = id
    this.code = code
    this.percentage = percentage
  }
}
