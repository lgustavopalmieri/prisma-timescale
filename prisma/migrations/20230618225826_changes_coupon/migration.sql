/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Coupon` table. All the data in the column will be lost.
  - Added the required column `code` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "createdAt",
DROP COLUMN "name",
ADD COLUMN     "code" TEXT NOT NULL;
