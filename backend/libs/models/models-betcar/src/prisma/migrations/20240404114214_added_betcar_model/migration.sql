/*
  Warnings:

  - You are about to drop the column `add_element` on the `back_side_damages` table. All the data in the column will be lost.
  - The `tailgate` column on the `back_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `rear_bumper` column on the `back_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_lamp` column on the `back_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_lamp` column on the `back_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `comment` on the `dashboards` table. All the data in the column will be lost.
  - You are about to drop the column `add_element` on the `disc_damages` table. All the data in the column will be lost.
  - The `left_front_disc` column on the `disc_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_rear_disc` column on the `disc_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_front_disc` column on the `disc_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_rear_disc` column on the `disc_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `back_video` on the `exterior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `front_video` on the `exterior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `left_back_video` on the `exterior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `left_front_video` on the `exterior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `left_video` on the `exterior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `right_back_video` on the `exterior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `right_front_video` on the `exterior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `right_video` on the `exterior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `add_element` on the `front_side_damages` table. All the data in the column will be lost.
  - The `fog_lights` column on the `front_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `radiator_grille` column on the `front_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `front_bumper` column on the `front_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_headlight` column on the `front_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_headlight` column on the `front_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hood` column on the `front_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `add_element` on the `glass_damages` table. All the data in the column will be lost.
  - The `windshield` column on the `glass_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_front_glass` column on the `glass_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_rear_glass` column on the `glass_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `rear_glass` column on the `glass_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_front_glass` column on the `glass_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_rear_glass` column on the `glass_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `add_element` on the `interior_damages` table. All the data in the column will be lost.
  - You are about to drop the column `rear_seat` on the `interior_damages` table. All the data in the column will be lost.
  - You are about to drop the column `salon_arpet` on the `interior_damages` table. All the data in the column will be lost.
  - You are about to drop the column `trunk` on the `interior_damages` table. All the data in the column will be lost.
  - The `torpedo` column on the `interior_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `drivers_seat` column on the `interior_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `passenger_seat` column on the `interior_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ceiling` column on the `interior_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `back_seats_photo` on the `interior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `back_seats_video` on the `interior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `dashboard_video` on the `interior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `driver_seat_video` on the `interior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `engine_photo` on the `interior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `engine_video` on the `interior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `front_seats_video` on the `interior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `transmission_photo` on the `interior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `transmission_video` on the `interior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `trunk_photo` on the `interior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `trunk_video` on the `interior_photos` table. All the data in the column will be lost.
  - You are about to drop the column `add_element` on the `left_side_damages` table. All the data in the column will be lost.
  - The `left_front_fender` column on the `left_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_front_pillar` column on the `left_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_front_door` column on the `left_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_center_pillar` column on the `left_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_rear_door` column on the `left_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_rear_pillar` column on the `left_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_rear_fender` column on the `left_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_mirror` column on the `left_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `left_threshold` column on the `left_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `add_element` on the `right_side_damages` table. All the data in the column will be lost.
  - The `right_front_fender` column on the `right_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_front_pillar` column on the `right_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_front_door` column on the `right_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_center_pillar` column on the `right_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_rear_door` column on the `right_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_rear_pillar` column on the `right_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_rear_fender` column on the `right_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_mirror` column on the `right_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `right_threshold` column on the `right_side_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `add_element` on the `roof_damages` table. All the data in the column will be lost.
  - The `roof_rails` column on the `roof_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `roof` column on the `roof_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `luke` column on the `roof_damages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `fail` on the `round_view_videous` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `round_view_videous` table. All the data in the column will be lost.
  - You are about to drop the column `dvs_wont_start` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `engine_file` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `engine_photo` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `gearshift` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `steering` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `total_comment` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `car_dismantled` on the `stopped_engines` table. All the data in the column will be lost.
  - You are about to drop the column `condition` on the `stopped_engines` table. All the data in the column will be lost.
  - You are about to drop the column `dispensing_mechanism` on the `stopped_engines` table. All the data in the column will be lost.
  - You are about to drop the column `dvs` on the `stopped_engines` table. All the data in the column will be lost.
  - You are about to drop the column `front_axle` on the `stopped_engines` table. All the data in the column will be lost.
  - You are about to drop the column `gur` on the `stopped_engines` table. All the data in the column will be lost.
  - You are about to drop the column `kpp` on the `stopped_engines` table. All the data in the column will be lost.
  - You are about to drop the column `rear_axle` on the `stopped_engines` table. All the data in the column will be lost.
  - You are about to drop the column `shock_absorbers` on the `stopped_engines` table. All the data in the column will be lost.
  - You are about to drop the column `diagnostic_results` on the `tests_drive` table. All the data in the column will be lost.
  - You are about to drop the column `diagnostics_file` on the `tests_drive` table. All the data in the column will be lost.
  - You are about to drop the column `electronic_diagnostics` on the `tests_drive` table. All the data in the column will be lost.
  - Added the required column `report_id` to the `back_side_damages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `dashboards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `disc_damages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `experts_opinions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `exterior_photos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `front_side_damages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `glass_damages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `interior_damages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `interior_photos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `left_side_damages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `right_side_damages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `roof_damages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `round_view_videous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `running_engines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `stopped_engines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `tests_drive` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "back_side_damages" DROP COLUMN "add_element",
ADD COLUMN     "report_id" INTEGER NOT NULL,
DROP COLUMN "tailgate",
ADD COLUMN     "tailgate" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "rear_bumper",
ADD COLUMN     "rear_bumper" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_lamp",
ADD COLUMN     "left_lamp" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_lamp",
ADD COLUMN     "right_lamp" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "dashboards" DROP COLUMN "comment",
ADD COLUMN     "abs" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "battery" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "control_light_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "diagnostics_file" TEXT DEFAULT '',
ADD COLUMN     "diagnostics_result" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "electronic_diagnostics" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_no_mileage" BOOLEAN DEFAULT false,
ADD COLUMN     "report_id" INTEGER NOT NULL,
ADD COLUMN     "tire_pressure" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "total_comment" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "mileage_on_dashboard" DROP NOT NULL,
ALTER COLUMN "mileage_in_the_engine_block" DROP NOT NULL,
ALTER COLUMN "mileage_in_the_gearbox" DROP NOT NULL,
ALTER COLUMN "mileage_in_additional_blocks" DROP NOT NULL;

-- AlterTable
ALTER TABLE "disc_damages" DROP COLUMN "add_element",
ADD COLUMN     "report_id" INTEGER NOT NULL,
DROP COLUMN "left_front_disc",
ADD COLUMN     "left_front_disc" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_rear_disc",
ADD COLUMN     "left_rear_disc" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_front_disc",
ADD COLUMN     "right_front_disc" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_rear_disc",
ADD COLUMN     "right_rear_disc" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "experts_opinions" ADD COLUMN     "report_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "exterior_photos" DROP COLUMN "back_video",
DROP COLUMN "front_video",
DROP COLUMN "left_back_video",
DROP COLUMN "left_front_video",
DROP COLUMN "left_video",
DROP COLUMN "right_back_video",
DROP COLUMN "right_front_video",
DROP COLUMN "right_video",
ADD COLUMN     "hood_open" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "report_id" INTEGER NOT NULL,
ADD COLUMN     "trunk_open" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "front_side_damages" DROP COLUMN "add_element",
ADD COLUMN     "report_id" INTEGER NOT NULL,
DROP COLUMN "fog_lights",
ADD COLUMN     "fog_lights" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "radiator_grille",
ADD COLUMN     "radiator_grille" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "front_bumper",
ADD COLUMN     "front_bumper" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_headlight",
ADD COLUMN     "right_headlight" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_headlight",
ADD COLUMN     "left_headlight" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "hood",
ADD COLUMN     "hood" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "glass_damages" DROP COLUMN "add_element",
ADD COLUMN     "report_id" INTEGER NOT NULL,
DROP COLUMN "windshield",
ADD COLUMN     "windshield" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_front_glass",
ADD COLUMN     "left_front_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_rear_glass",
ADD COLUMN     "left_rear_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "rear_glass",
ADD COLUMN     "rear_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_front_glass",
ADD COLUMN     "right_front_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_rear_glass",
ADD COLUMN     "right_rear_glass" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "interior_damages" DROP COLUMN "add_element",
DROP COLUMN "rear_seat",
DROP COLUMN "salon_arpet",
DROP COLUMN "trunk",
ADD COLUMN     "back_left_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "back_right_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "back_seat" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "front_left_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "front_right_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "report_id" INTEGER NOT NULL,
ADD COLUMN     "salon_carpet" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "sleeping_compartment" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "torpedo",
ADD COLUMN     "torpedo" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "drivers_seat",
ADD COLUMN     "drivers_seat" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "passenger_seat",
ADD COLUMN     "passenger_seat" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "ceiling",
ADD COLUMN     "ceiling" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "interior_photos" DROP COLUMN "back_seats_photo",
DROP COLUMN "back_seats_video",
DROP COLUMN "dashboard_video",
DROP COLUMN "driver_seat_video",
DROP COLUMN "engine_photo",
DROP COLUMN "engine_video",
DROP COLUMN "front_seats_video",
DROP COLUMN "transmission_photo",
DROP COLUMN "transmission_video",
DROP COLUMN "trunk_photo",
DROP COLUMN "trunk_video",
ADD COLUMN     "back_left_seats_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "back_right_seats_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "left_back_door" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "left_front_door" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "passenger_seat_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "report_id" INTEGER NOT NULL,
ADD COLUMN     "right_back_door" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "right_front_door" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "steering_wheel_photo" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "left_side_damages" DROP COLUMN "add_element",
ADD COLUMN     "report_id" INTEGER NOT NULL,
DROP COLUMN "left_front_fender",
ADD COLUMN     "left_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_front_pillar",
ADD COLUMN     "left_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_front_door",
ADD COLUMN     "left_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_center_pillar",
ADD COLUMN     "left_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_rear_door",
ADD COLUMN     "left_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_rear_pillar",
ADD COLUMN     "left_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_rear_fender",
ADD COLUMN     "left_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_mirror",
ADD COLUMN     "left_mirror" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "left_threshold",
ADD COLUMN     "left_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "right_side_damages" DROP COLUMN "add_element",
ADD COLUMN     "report_id" INTEGER NOT NULL,
DROP COLUMN "right_front_fender",
ADD COLUMN     "right_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_front_pillar",
ADD COLUMN     "right_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_front_door",
ADD COLUMN     "right_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_center_pillar",
ADD COLUMN     "right_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_rear_door",
ADD COLUMN     "right_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_rear_pillar",
ADD COLUMN     "right_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_rear_fender",
ADD COLUMN     "right_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_mirror",
ADD COLUMN     "right_mirror" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "right_threshold",
ADD COLUMN     "right_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "roof_damages" DROP COLUMN "add_element",
ADD COLUMN     "panorama" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "report_id" INTEGER NOT NULL,
DROP COLUMN "roof_rails",
ADD COLUMN     "roof_rails" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "roof",
ADD COLUMN     "roof" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "luke",
ADD COLUMN     "luke" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "round_view_videous" DROP COLUMN "fail",
DROP COLUMN "photo",
ADD COLUMN     "report_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "running_engines" DROP COLUMN "dvs_wont_start",
DROP COLUMN "engine_file",
DROP COLUMN "engine_photo",
DROP COLUMN "gearshift",
DROP COLUMN "steering",
DROP COLUMN "total_comment",
ADD COLUMN     "electric_panorama" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "electric_seats" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "electric_steering_wheel" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "electric_sunroof" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "electric_system_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "electric_trunk_drive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "engine_not_start" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "gearbox_switching" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "heated_steering_wheel" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "heated_windshield" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "interior_heater" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mechanical_system_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "report_id" INTEGER NOT NULL,
ADD COLUMN     "seat_massage" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sound_signal" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "window_lifters" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "windscreen_wipers" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "windshield_washers" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "stopped_engines" DROP COLUMN "car_dismantled",
DROP COLUMN "condition",
DROP COLUMN "dispensing_mechanism",
DROP COLUMN "dvs",
DROP COLUMN "front_axle",
DROP COLUMN "gur",
DROP COLUMN "kpp",
DROP COLUMN "rear_axle",
DROP COLUMN "shock_absorbers",
ADD COLUMN     "brake_discs" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "brake_fluid_level" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "drive_belts" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "is_emergency" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_new" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_not_go" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_understaffed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "report_id" INTEGER NOT NULL,
ADD COLUMN     "technical_fluid_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "wear_comment" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "engine_oil_level" SET DEFAULT '',
ALTER COLUMN "engine_oil_level" SET DATA TYPE TEXT,
ALTER COLUMN "gearbox_oil_level" SET DEFAULT '',
ALTER COLUMN "gearbox_oil_level" SET DATA TYPE TEXT,
ALTER COLUMN "gur_liquid_level" SET DEFAULT '',
ALTER COLUMN "gur_liquid_level" SET DATA TYPE TEXT,
ALTER COLUMN "coolant_level" SET DEFAULT '',
ALTER COLUMN "coolant_level" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "tests_drive" DROP COLUMN "diagnostic_results",
DROP COLUMN "diagnostics_file",
DROP COLUMN "electronic_diagnostics",
ADD COLUMN     "exhaust_system" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "report_id" INTEGER NOT NULL,
ADD COLUMN     "steering" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "add_front_elements" (
    "add_element_front_id" SERIAL NOT NULL,
    "front_side_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_front_elements_pkey" PRIMARY KEY ("add_element_front_id")
);

-- CreateTable
CREATE TABLE "add_left_elements" (
    "add_element_left_id" SERIAL NOT NULL,
    "left_side_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_left_elements_pkey" PRIMARY KEY ("add_element_left_id")
);

-- CreateTable
CREATE TABLE "add_back_elements" (
    "add_element_back_id" SERIAL NOT NULL,
    "back_side_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_back_elements_pkey" PRIMARY KEY ("add_element_back_id")
);

-- CreateTable
CREATE TABLE "trunks_damage" (
    "trunk_damage" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "cover_trim" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "carpet_floor" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_trim" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_trim" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "seat_back_trim" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "spare_wheel_well" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "trunks_damage_pkey" PRIMARY KEY ("trunk_damage")
);

-- CreateTable
CREATE TABLE "add_trunk_elements" (
    "add_element_back_id" SERIAL NOT NULL,
    "trunk_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_trunk_elements_pkey" PRIMARY KEY ("add_element_back_id")
);

-- CreateTable
CREATE TABLE "add_right_elements" (
    "add_element_right_id" SERIAL NOT NULL,
    "right_side_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_right_elements_pkey" PRIMARY KEY ("add_element_right_id")
);

-- CreateTable
CREATE TABLE "add_roof_elements" (
    "add_element_roof_id" SERIAL NOT NULL,
    "roof_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_roof_elements_pkey" PRIMARY KEY ("add_element_roof_id")
);

-- CreateTable
CREATE TABLE "add_glass_elements" (
    "add_element_glass_id" SERIAL NOT NULL,
    "glass_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_glass_elements_pkey" PRIMARY KEY ("add_element_glass_id")
);

-- CreateTable
CREATE TABLE "add_disc_elements" (
    "add_element_disc_id" SERIAL NOT NULL,
    "disc_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_disc_elements_pkey" PRIMARY KEY ("add_element_disc_id")
);

-- CreateTable
CREATE TABLE "add_interior_elements" (
    "add_element_interior_id" SERIAL NOT NULL,
    "interior_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_interior_elements_pkey" PRIMARY KEY ("add_element_interior_id")
);

-- AddForeignKey
ALTER TABLE "front_side_damages" ADD CONSTRAINT "front_side_damages_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "add_front_elements" ADD CONSTRAINT "add_front_elements_front_side_damage_id_fkey" FOREIGN KEY ("front_side_damage_id") REFERENCES "front_side_damages"("front_side_damage_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "left_side_damages" ADD CONSTRAINT "left_side_damages_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "add_left_elements" ADD CONSTRAINT "add_left_elements_left_side_damage_id_fkey" FOREIGN KEY ("left_side_damage_id") REFERENCES "left_side_damages"("left_side_damage_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "back_side_damages" ADD CONSTRAINT "back_side_damages_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "add_back_elements" ADD CONSTRAINT "add_back_elements_back_side_damage_id_fkey" FOREIGN KEY ("back_side_damage_id") REFERENCES "back_side_damages"("back_side_damage_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trunks_damage" ADD CONSTRAINT "trunks_damage_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "add_trunk_elements" ADD CONSTRAINT "add_trunk_elements_trunk_damage_id_fkey" FOREIGN KEY ("trunk_damage_id") REFERENCES "trunks_damage"("trunk_damage") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "right_side_damages" ADD CONSTRAINT "right_side_damages_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "add_right_elements" ADD CONSTRAINT "add_right_elements_right_side_damage_id_fkey" FOREIGN KEY ("right_side_damage_id") REFERENCES "right_side_damages"("right_side_damage_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roof_damages" ADD CONSTRAINT "roof_damages_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "add_roof_elements" ADD CONSTRAINT "add_roof_elements_roof_damage_id_fkey" FOREIGN KEY ("roof_damage_id") REFERENCES "roof_damages"("roof_damage_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "glass_damages" ADD CONSTRAINT "glass_damages_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "add_glass_elements" ADD CONSTRAINT "add_glass_elements_glass_damage_id_fkey" FOREIGN KEY ("glass_damage_id") REFERENCES "glass_damages"("glass_damage_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disc_damages" ADD CONSTRAINT "disc_damages_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "add_disc_elements" ADD CONSTRAINT "add_disc_elements_disc_damage_id_fkey" FOREIGN KEY ("disc_damage_id") REFERENCES "disc_damages"("disc_damage_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interior_damages" ADD CONSTRAINT "interior_damages_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "add_interior_elements" ADD CONSTRAINT "add_interior_elements_interior_damage_id_fkey" FOREIGN KEY ("interior_damage_id") REFERENCES "interior_damages"("interior_damage_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exterior_photos" ADD CONSTRAINT "exterior_photos_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interior_photos" ADD CONSTRAINT "interior_photos_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "round_view_videous" ADD CONSTRAINT "round_view_videous_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stopped_engines" ADD CONSTRAINT "stopped_engines_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "running_engines" ADD CONSTRAINT "running_engines_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dashboards" ADD CONSTRAINT "dashboards_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tests_drive" ADD CONSTRAINT "tests_drive_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experts_opinions" ADD CONSTRAINT "experts_opinions_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;
