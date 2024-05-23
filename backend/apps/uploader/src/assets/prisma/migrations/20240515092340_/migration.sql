/*
  Warnings:

  - You are about to drop the column `modification` on the `cars_datas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cars_datas" DROP COLUMN "modification";

-- AlterTable
ALTER TABLE "glass_damages" ADD COLUMN     "all_glass_is_factory" BOOLEAN NOT NULL DEFAULT false;
