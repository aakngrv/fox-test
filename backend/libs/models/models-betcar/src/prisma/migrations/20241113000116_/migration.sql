/*
  Warnings:

  - You are about to drop the `add_paintwork_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paintwork_inspections` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_paintwork_elements" DROP CONSTRAINT "add_paintwork_elements_paintwork_inspection_id_fkey";

-- DropForeignKey
ALTER TABLE "paintwork_inspections" DROP CONSTRAINT "paintwork_inspections_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "paintworkInspectionAddInfTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintworkInspectionAddInfoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintworkInspectionAddInfoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintworkInspectionAddNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "paintworkInspectionAddNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "paintworkInspectionAddNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "paintworkInspectionHood" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintworkInspectionRoof" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_body_in_film" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "paintwork_inspection_factory_color" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "paintwork_inspection_left_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_left_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_left_front_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_left_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_left_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_left_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_left_rear_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_left_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_left_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_left_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_right_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_right_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_right_front_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_right_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_right_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_right_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_right_rear_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_right_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_right_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_right_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "paintwork_inspection_trunk_lid" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- DropTable
DROP TABLE "add_paintwork_elements";

-- DropTable
DROP TABLE "paintwork_inspections";
