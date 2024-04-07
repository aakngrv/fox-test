/*
  Warnings:

  - You are about to drop the column `disc_tuning` on the `complectation_bodies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "complectation_bodies" DROP COLUMN "disc_tuning",
ADD COLUMN     "body_tuning" BOOLEAN NOT NULL DEFAULT false;
