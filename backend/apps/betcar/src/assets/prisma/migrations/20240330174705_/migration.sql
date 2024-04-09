/*
  Warnings:

  - You are about to drop the column `power_mirrors` on the `complectation_comforts` table. All the data in the column will be lost.
  - You are about to drop the column `programmable_starting_heater` on the `complectation_comforts` table. All the data in the column will be lost.
  - The `camera` column on the `complectation_comforts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `steering_wheel_adjustment` column on the `complectation_comforts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `parking_assistance_system` column on the `complectation_comforts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `electric_lifts` column on the `complectation_comforts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `audio_system` on the `complectation_multimedias` table. All the data in the column will be lost.
  - You are about to drop the column `socket_12_v` on the `complectation_multimedias` table. All the data in the column will be lost.
  - You are about to drop the column `socket_220_v` on the `complectation_multimedias` table. All the data in the column will be lost.
  - You are about to drop the column `air_suspension` on the `complectation_others` table. All the data in the column will be lost.
  - You are about to drop the column `autorun` on the `complectation_others` table. All the data in the column will be lost.
  - You are about to drop the column `hitch` on the `complectation_others` table. All the data in the column will be lost.
  - You are about to drop the column `suspension` on the `complectation_others` table. All the data in the column will be lost.
  - You are about to drop the column `tool` on the `complectation_others` table. All the data in the column will be lost.
  - The `motorist_set` column on the `complectation_others` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `abs` on the `complectation_safeties` table. All the data in the column will be lost.
  - You are about to drop the column `esp` on the `complectation_safeties` table. All the data in the column will be lost.
  - You are about to drop the column `rear_door_lock` on the `complectation_safeties` table. All the data in the column will be lost.
  - You are about to drop the column `tire_pressure_sensor` on the `complectation_safeties` table. All the data in the column will be lost.
  - The `auxiliary_systems` column on the `complectation_safeties` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `airbags` column on the `complectation_safeties` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `isofix` column on the `complectation_safeties` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `interior_color` on the `complectation_salons` table. All the data in the column will be lost.
  - You are about to drop the column `number_of_seats` on the `complectation_salons` table. All the data in the column will be lost.
  - You are about to drop the column `power_seats` on the `complectation_salons` table. All the data in the column will be lost.
  - The `heated_seats` column on the `complectation_salons` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `seat_ventilation` column on the `complectation_salons` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `comment` on the `paintwork_inspections` table. All the data in the column will be lost.
  - The `hood` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `roof` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_front_fender` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_front_pillar` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_front_door` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_threshold` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_center_pillar` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_rear_door` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_rear_pillar` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_rear_fender` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `trunk_lid` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_front_fender` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_front_pillar` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_front_door` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_threshold` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_center_pillar` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_rear_door` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_rear_pillar` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_rear_fender` column on the `paintwork_inspections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `complectation_reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `complectation_tires` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paintwork_inspection_displays` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `report_id` to the `complectation_comforts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `complectation_multimedias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `complectation_others` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `complectation_protections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `complectation_safeties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `complectation_salons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `paintwork_inspections` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "complectation_comforts" DROP COLUMN "power_mirrors",
DROP COLUMN "programmable_starting_heater",
ADD COLUMN     "electric_heating" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "electric_mirrors" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "preheater" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "report_id" INTEGER NOT NULL,
ADD COLUMN     "suspension" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "touch_control_panel" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "camera",
ADD COLUMN     "camera" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "steering_wheel_adjustment",
ADD COLUMN     "steering_wheel_adjustment" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "parking_assistance_system",
ADD COLUMN     "parking_assistance_system" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "electric_lifts",
ADD COLUMN     "electric_lifts" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "complectation_multimedias" DROP COLUMN "audio_system",
DROP COLUMN "socket_12_v",
DROP COLUMN "socket_220_v",
ADD COLUMN     "car_play" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "cassette" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "report_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "complectation_others" DROP COLUMN "air_suspension",
DROP COLUMN "autorun",
DROP COLUMN "hitch",
DROP COLUMN "suspension",
DROP COLUMN "tool",
ADD COLUMN     "airbox" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "report_id" INTEGER NOT NULL,
ADD COLUMN     "socket_12v" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "socket_220v" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tow_bar" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "transverse_arches" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "winch" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "motorist_set",
ADD COLUMN     "motorist_set" TEXT[] DEFAULT ARRAY['']::TEXT[],
ALTER COLUMN "spare_wheel" SET DEFAULT '',
ALTER COLUMN "spare_wheel" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "complectation_protections" ADD COLUMN     "authors_security_system" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "label" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "report_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "complectation_safeties" DROP COLUMN "abs",
DROP COLUMN "esp",
DROP COLUMN "rear_door_lock",
DROP COLUMN "tire_pressure_sensor",
ADD COLUMN     "locking" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "report_id" INTEGER NOT NULL,
DROP COLUMN "auxiliary_systems",
ADD COLUMN     "auxiliary_systems" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "airbags",
ADD COLUMN     "airbags" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "isofix",
ADD COLUMN     "isofix" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "complectation_salons" DROP COLUMN "interior_color",
DROP COLUMN "number_of_seats",
DROP COLUMN "power_seats",
ADD COLUMN     "electrically_adjustable_seats" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "report_id" INTEGER NOT NULL,
ADD COLUMN     "seat_covers" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "seat_massage" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "heated_seats",
ADD COLUMN     "heated_seats" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "seat_ventilation",
ADD COLUMN     "seat_ventilation" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "paintwork_inspections" DROP COLUMN "comment",
ADD COLUMN     "body_in_film" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "left_front_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "left_rear_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "report_id" INTEGER NOT NULL,
ADD COLUMN     "right_front_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "right_rear_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "hood",
ADD COLUMN     "hood" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "roof",
ADD COLUMN     "roof" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_front_fender",
ADD COLUMN     "left_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_front_pillar",
ADD COLUMN     "left_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_front_door",
ADD COLUMN     "left_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_threshold",
ADD COLUMN     "left_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_center_pillar",
ADD COLUMN     "left_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_rear_door",
ADD COLUMN     "left_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_rear_pillar",
ADD COLUMN     "left_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_rear_fender",
ADD COLUMN     "left_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "trunk_lid",
ADD COLUMN     "trunk_lid" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_front_fender",
ADD COLUMN     "right_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_front_pillar",
ADD COLUMN     "right_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_front_door",
ADD COLUMN     "right_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_threshold",
ADD COLUMN     "right_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_center_pillar",
ADD COLUMN     "right_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_rear_door",
ADD COLUMN     "right_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_rear_pillar",
ADD COLUMN     "right_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_rear_fender",
ADD COLUMN     "right_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- DropTable
DROP TABLE "complectation_reviews";

-- DropTable
DROP TABLE "complectation_tires";

-- DropTable
DROP TABLE "paintwork_inspection_displays";

-- CreateTable
CREATE TABLE "complectation_wheels" (
    "complectation_wheels_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "is_tires_identical" BOOLEAN NOT NULL DEFAULT false,
    "additional_tire_sets" BOOLEAN NOT NULL DEFAULT false,
    "additional_sets_of_disks" BOOLEAN NOT NULL DEFAULT false,
    "type_of_disks" TEXT NOT NULL DEFAULT '',
    "seasonality" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "front_left_brand" TEXT NOT NULL DEFAULT '',
    "back_left_brand" TEXT NOT NULL DEFAULT '',
    "front_right_brand" TEXT NOT NULL DEFAULT '',
    "back_right_brand" TEXT NOT NULL DEFAULT '',
    "front_left_model" TEXT NOT NULL DEFAULT '',
    "back_left_model" TEXT NOT NULL DEFAULT '',
    "front_right_model" TEXT NOT NULL DEFAULT '',
    "back_right_model" TEXT NOT NULL DEFAULT '',
    "front_left_issue_date" TEXT NOT NULL DEFAULT '',
    "back_left_issue_date" TEXT NOT NULL DEFAULT '',
    "front_right_issue_date" TEXT NOT NULL DEFAULT '',
    "back_right_issue_date" TEXT NOT NULL DEFAULT '',
    "front_left_options" TEXT NOT NULL DEFAULT '',
    "back_left_options" TEXT NOT NULL DEFAULT '',
    "front_right_options" TEXT NOT NULL DEFAULT '',
    "back_right_options" TEXT NOT NULL DEFAULT '',
    "front_left_wear" TEXT NOT NULL DEFAULT '',
    "back_left_wear" TEXT NOT NULL DEFAULT '',
    "front_right_wear" TEXT NOT NULL DEFAULT '',
    "back_right_wear" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "complectation_wheels_pkey" PRIMARY KEY ("complectation_wheels_id")
);

-- CreateTable
CREATE TABLE "complectation_headlights" (
    "complectation_headlights_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "light_sensor" BOOLEAN NOT NULL DEFAULT false,
    "rain_sensor" BOOLEAN NOT NULL DEFAULT false,
    "headlight_washer" BOOLEAN NOT NULL DEFAULT false,
    "fog_lights" BOOLEAN NOT NULL DEFAULT false,
    "automatic_headlight_leveling" BOOLEAN NOT NULL DEFAULT false,
    "adaptive_lighting_system" BOOLEAN NOT NULL DEFAULT false,
    "high_beam_control_system" BOOLEAN NOT NULL DEFAULT false,
    "headlights" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "complectation_headlights_pkey" PRIMARY KEY ("complectation_headlights_id")
);

-- CreateTable
CREATE TABLE "engine_compartments_damage" (
    "engine_compartment_damage_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "left_side_member" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_side_member" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "hood_hinges" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "televisor" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "engine_compartments_damage_pkey" PRIMARY KEY ("engine_compartment_damage_id")
);

-- CreateTable
CREATE TABLE "add_elements" (
    "add_element_id" SERIAL NOT NULL,
    "engine_compartment_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_elements_pkey" PRIMARY KEY ("add_element_id")
);

-- AddForeignKey
ALTER TABLE "complectation_wheels" ADD CONSTRAINT "complectation_wheels_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complectation_salons" ADD CONSTRAINT "complectation_salons_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complectation_headlights" ADD CONSTRAINT "complectation_headlights_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complectation_multimedias" ADD CONSTRAINT "complectation_multimedias_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complectation_comforts" ADD CONSTRAINT "complectation_comforts_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complectation_safeties" ADD CONSTRAINT "complectation_safeties_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complectation_protections" ADD CONSTRAINT "complectation_protections_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complectation_others" ADD CONSTRAINT "complectation_others_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paintwork_inspections" ADD CONSTRAINT "paintwork_inspections_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engine_compartments_damage" ADD CONSTRAINT "engine_compartments_damage_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "add_elements" ADD CONSTRAINT "add_elements_engine_compartment_damage_id_fkey" FOREIGN KEY ("engine_compartment_damage_id") REFERENCES "engine_compartments_damage"("engine_compartment_damage_id") ON DELETE CASCADE ON UPDATE CASCADE;
