/*
  Warnings:

  - You are about to drop the `complectation_wheels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "complectation_wheels" DROP CONSTRAINT "complectation_wheels_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "complectation_wheels_additional_disks_type" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_additional_sets_of_disks" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_wheels_additional_tire_sets" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_wheels_additional_tires_seasonality" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_wheels_back_left_brand" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_back_left_issue_date" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_back_left_model" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_back_left_options" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_wheels_back_left_wear" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_back_right_brand" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_back_right_issue_date" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_back_right_model" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_back_right_options" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_wheels_back_right_wear" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_front_left_brand" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_front_left_issue_date" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_front_left_model" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_front_left_options" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_wheels_front_left_wear" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_front_right_brand" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_front_right_issue_date" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_front_right_model" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_front_right_options" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_wheels_front_right_wear" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_is_tires_identical" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_wheels_seasonality" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_wheels_type_of_disks" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "complectation_wheels";
