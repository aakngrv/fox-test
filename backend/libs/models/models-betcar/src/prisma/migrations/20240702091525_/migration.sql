/*
  Warnings:

  - You are about to drop the column `air_conditioner` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `audio_system` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `battery` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `electric_mirrors` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `electric_panorama` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `electric_seats` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `electric_steering_wheel` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `electric_sunroof` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `electric_system_comment` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `electric_trunk_drive` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `engine_operation` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `gearbox_switching` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `heated_steering_wheel` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `heated_windshield` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `interior_heater` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `lighting_engineering` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `mechanical_system_comment` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `power_steering` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `seat_heating` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `seat_massage` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `sound_signal` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `window_lifters` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `windscreen_wipers` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `windshield_washers` on the `running_engines` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "running_engines" DROP COLUMN "air_conditioner",
DROP COLUMN "audio_system",
DROP COLUMN "battery",
DROP COLUMN "electric_mirrors",
DROP COLUMN "electric_panorama",
DROP COLUMN "electric_seats",
DROP COLUMN "electric_steering_wheel",
DROP COLUMN "electric_sunroof",
DROP COLUMN "electric_system_comment",
DROP COLUMN "electric_trunk_drive",
DROP COLUMN "engine_operation",
DROP COLUMN "gearbox_switching",
DROP COLUMN "heated_steering_wheel",
DROP COLUMN "heated_windshield",
DROP COLUMN "interior_heater",
DROP COLUMN "lighting_engineering",
DROP COLUMN "mechanical_system_comment",
DROP COLUMN "power_steering",
DROP COLUMN "seat_heating",
DROP COLUMN "seat_massage",
DROP COLUMN "sound_signal",
DROP COLUMN "window_lifters",
DROP COLUMN "windscreen_wipers",
DROP COLUMN "windshield_washers",
ADD COLUMN     "all_system_ok_electric" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "all_system_ok_mechanical" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "electrical_malfunction" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "mechanical_malfunction" TEXT[] DEFAULT ARRAY['']::TEXT[];
