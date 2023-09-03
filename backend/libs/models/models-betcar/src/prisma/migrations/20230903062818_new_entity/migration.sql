/*
  Warnings:

  - You are about to drop the column `equipment_name` on the `complectation-reviews` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "complectation-reviews" DROP COLUMN "equipment_name",
ADD COLUMN     "complectation_name" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "complectation_others" ADD COLUMN     "motorist_set" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tool" BOOLEAN NOT NULL DEFAULT false;
