import CouponFactory from "../../../domain/coupon/factory/coupon.factory";
import CouponRepositoryInterface from "../../../domain/coupon/repository/coupon-repository.interface";
import {
  InputCreateCouponDto,
  OutputCreateCouponDto,
} from "./create.coupon.dto";

export default class CreateCouponUseCase {
  private couponRepository: CouponRepositoryInterface;

  constructor(couponRepository: CouponRepositoryInterface) {
    this.couponRepository = couponRepository;
  }

  async execute(input: InputCreateCouponDto): Promise<OutputCreateCouponDto> {
    const coupon = CouponFactory.create({
      code: input.code,
      percentage: input.percentage,
    });

    // await this.couponRepository.findOne(coupon.id);

    await this.couponRepository.create(coupon);

    return {
      id: coupon.id,
      code: coupon.code,
      percentage: coupon.percentage,
    };
  }
}
