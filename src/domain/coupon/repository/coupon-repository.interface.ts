export default interface CouponRepositoryInterface<Coupon> {
  createCoupon(entity: Coupon): Promise<void>
  createCouponAndCountAll(entity: Coupon): Promise<any>
  getCoupons(): Promise<Coupon[]>
  getCouponById(id: string): Promise<Coupon>
  updateCoupon(id: string, entity: Coupon): Promise<Coupon>
  // deleteCoupon(id: string): Promise<void>
}
