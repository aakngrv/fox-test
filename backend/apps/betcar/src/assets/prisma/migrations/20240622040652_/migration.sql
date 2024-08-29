/*
  Warnings:

  - You are about to drop the column `electric_mirrors` on the `tests_drive` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "running_engines" ADD COLUMN     "electric_mirrors" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "tests_drive" DROP COLUMN "electric_mirrors";
