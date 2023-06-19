-- CreateTable
CREATE TABLE "Coupon" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);
