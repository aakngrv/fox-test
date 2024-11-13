/*
  Warnings:

  - You are about to drop the `add_disc_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `disc_damages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_disc_elements" DROP CONSTRAINT "add_disc_elements_disc_damage_id_fkey";

-- DropForeignKey
ALTER TABLE "disc_damages" DROP CONSTRAINT "disc_damages_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "discDamageAddInfTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "discDamageAddInfoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "discDamageAddInfoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "discDamageAddNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "discDamageAddNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "discDamageAddNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "disc_damage_left_front_disc" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "disc_damage_left_rear_disc" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "disc_damage_right_front_disc" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "disc_damage_without_damage" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "add_disc_elements";

-- DropTable
DROP TABLE "disc_damages";
