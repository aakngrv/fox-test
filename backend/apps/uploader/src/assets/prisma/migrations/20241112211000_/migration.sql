/*
  Warnings:

  - You are about to drop the `complectation_bodies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "complectation_bodies" DROP CONSTRAINT "complectation_bodies_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "complectation_body_airbrushing" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_body_body_in_film" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_body_body_stickers" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_body_body_tuning" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_body_roof_rails" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "complectation_bodies";
