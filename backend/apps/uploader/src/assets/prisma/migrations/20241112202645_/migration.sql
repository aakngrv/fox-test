/*
  Warnings:

  - You are about to drop the column `car_cost` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `link_to_ad` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `refusal_of_inspection` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `sellerDetailsComment` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `sellerDetailsName` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `sellerDetailsPhone` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `sellerDetailsRole` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the `additional_documents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cars_datas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `engine_numbers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `frame_numbers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `state_numbers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tcps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vin_body_numbers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "additional_documents" DROP CONSTRAINT "additional_documents_car_data_id_fkey";

-- DropForeignKey
ALTER TABLE "cars_datas" DROP CONSTRAINT "cars_datas_report_id_fkey";

-- DropForeignKey
ALTER TABLE "engine_numbers" DROP CONSTRAINT "engine_numbers_car_data_id_fkey";

-- DropForeignKey
ALTER TABLE "frame_numbers" DROP CONSTRAINT "frame_numbers_car_data_id_fkey";

-- DropForeignKey
ALTER TABLE "state_numbers" DROP CONSTRAINT "state_numbers_car_data_id_fkey";

-- DropForeignKey
ALTER TABLE "sts" DROP CONSTRAINT "sts_report_id_fkey";

-- DropForeignKey
ALTER TABLE "tcps" DROP CONSTRAINT "tcps_report_id_fkey";

-- DropForeignKey
ALTER TABLE "vin_body_numbers" DROP CONSTRAINT "vin_body_numbers_car_data_id_fkey";

-- AlterTable
ALTER TABLE "reports" DROP COLUMN "car_cost",
DROP COLUMN "link_to_ad",
DROP COLUMN "refusal_of_inspection",
DROP COLUMN "sellerDetailsComment",
DROP COLUMN "sellerDetailsName",
DROP COLUMN "sellerDetailsPhone",
DROP COLUMN "sellerDetailsRole",
ADD COLUMN     "additional_documents_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "additional_documents_photo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "car_data_body_type" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "car_data_car_brand" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "car_data_car_model" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "car_data_color" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "car_data_drive_unit" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "car_data_engine_capacity" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "car_data_engines_type" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "car_data_gearbox_type" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "car_data_manufacture_year" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "car_data_power" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "car_data_pservice_book" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "car_data_steerint_wheel_location" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "engine_number" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "engine_number_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "engine_number_expert_confirm" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "engine_number_number_state" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[],
ADD COLUMN     "engine_number_photo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "frame_number" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "frame_number_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "frame_number_expert_confirm" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "frame_number_number_state" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[],
ADD COLUMN     "frame_number_photo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "seller_details_car_cost" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "seller_details_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "seller_details_link_to_ad" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "seller_details_name" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "seller_details_phone" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "seller_details_refusal_of_inspection" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "seller_details_role" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "state_number" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "state_number_absent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "state_number_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "state_number_foreign" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sts_absent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sts_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "sts_photo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "tcp__absent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tcp_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "tcp_number_of_owners" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "tcp_photo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "tcp_type" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "vin_number_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "vin_number_expert_confirm" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "vin_number_number_state" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[],
ADD COLUMN     "vin_number_photo" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- DropTable
DROP TABLE "additional_documents";

-- DropTable
DROP TABLE "cars_datas";

-- DropTable
DROP TABLE "engine_numbers";

-- DropTable
DROP TABLE "frame_numbers";

-- DropTable
DROP TABLE "state_numbers";

-- DropTable
DROP TABLE "sts";

-- DropTable
DROP TABLE "tcps";

-- DropTable
DROP TABLE "vin_body_numbers";
