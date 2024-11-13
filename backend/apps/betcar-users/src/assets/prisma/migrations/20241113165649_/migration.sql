/*
  Warnings:

  - You are about to drop the `add_roof_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roof_damages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_roof_elements" DROP CONSTRAINT "add_roof_elements_roof_damage_id_fkey";

-- DropForeignKey
ALTER TABLE "roof_damages" DROP CONSTRAINT "roof_damages_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "roofDamageAddInfTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "roofDamageAddInfoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "roofDamageAddInfoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "roofDamageAddNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "roofDamageAddNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "roofDamageAddNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "roof_damage_luke" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "roof_damage_panorama" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "roof_damage_roof" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "roof_damage_roof_rails" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "roof_damage_without_damage" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "add_roof_elements";

-- DropTable
DROP TABLE "roof_damages";
