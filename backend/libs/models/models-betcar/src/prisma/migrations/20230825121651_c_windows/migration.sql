/*
  Warnings:

  - You are about to drop the `vehicles_datas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "vehicles_datas";

-- CreateTable
CREATE TABLE "cars_datas" (
    "car_data_id" SERIAL NOT NULL,
    "vin" TEXT NOT NULL DEFAULT '',
    "frame_number" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',
    "have_a_service_book" BOOLEAN NOT NULL DEFAULT false,
    "additionalDocuments" TEXT NOT NULL DEFAULT '',
    "sts" TEXT NOT NULL DEFAULT '',
    "tcp" TEXT NOT NULL DEFAULT '',
    "state_number" TEXT NOT NULL DEFAULT '',
    "car_type" TEXT NOT NULL DEFAULT '',
    "car_brand" TEXT NOT NULL DEFAULT '',
    "car_model" TEXT NOT NULL DEFAULT '',
    "manufacture_year" TEXT NOT NULL DEFAULT '',
    "body_type" TEXT NOT NULL DEFAULT '',
    "generation" TEXT NOT NULL DEFAULT '',
    "engines_type" TEXT NOT NULL DEFAULT '',
    "engines_modification" TEXT NOT NULL DEFAULT '',
    "engines_number" TEXT NOT NULL DEFAULT '',
    "drive_unit" TEXT NOT NULL DEFAULT '',
    "gearbox_type" TEXT NOT NULL DEFAULT '',
    "modification" TEXT NOT NULL DEFAULT '',
    "engine_capacity" TEXT NOT NULL DEFAULT '',
    "power" TEXT NOT NULL DEFAULT '',
    "color" TEXT NOT NULL DEFAULT '',
    "metallic" BOOLEAN NOT NULL DEFAULT false,
    "mileage" TEXT NOT NULL DEFAULT '',
    "not_installed" BOOLEAN NOT NULL DEFAULT false,
    "new_car" BOOLEAN NOT NULL DEFAULT false,
    "emergency" BOOLEAN NOT NULL DEFAULT false,
    "not_on_track" BOOLEAN NOT NULL DEFAULT false,
    "total_comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "cars_datas_pkey" PRIMARY KEY ("car_data_id")
);
