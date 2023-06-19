import Coupon from "../entity/coupon";
import type { CouponInterface } from "../interface/coupon.interfce";
import { v4 as uuid } from "uuid";

export default class CouponFactory {
  public static create({ code, percentage }: CouponInterface): Coupon {
    return new Coupon({
      id: uuid(),
      code: code,
      percentage: percentage,
    });
  }
}
