/*
  Warnings:

  - You are about to drop the `complectation_comforts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `complectation_headlights` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `complectation_multimedias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `complectation_others` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `complectation_protections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `complectation_safeties` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "complectation_comforts" DROP CONSTRAINT "complectation_comforts_report_id_fkey";

-- DropForeignKey
ALTER TABLE "complectation_headlights" DROP CONSTRAINT "complectation_headlights_report_id_fkey";

-- DropForeignKey
ALTER TABLE "complectation_multimedias" DROP CONSTRAINT "complectation_multimedias_report_id_fkey";

-- DropForeignKey
ALTER TABLE "complectation_others" DROP CONSTRAINT "complectation_others_report_id_fkey";

-- DropForeignKey
ALTER TABLE "complectation_protections" DROP CONSTRAINT "complectation_protections_report_id_fkey";

-- DropForeignKey
ALTER TABLE "complectation_safeties" DROP CONSTRAINT "complectation_safeties_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "complectation_comfort_adjustable_pedal_assembly" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_air_conditioner" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_comfort_camera" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_comfort_complectation_comfort_preheater" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_cruise_control" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_comfort_electric_heating" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_comfort_electric_lifts" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_comfort_electric_mirrors" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_electric_trunk_lid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_electrofolding_of_mirrors" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_electronic_dashboard" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_engine_start_button" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_gearshift_paddles" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_hands-free_trunk_opening" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_keyless_entry_system" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_multifunction_steering_wheel" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_on_board_computer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_parking_assistance_system" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_comfort_power_steering" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_comfort_remote_engine_start" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_start-stop_system" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_comfort_steering_wheel_adjustment" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_comfort_suspension" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_comfort_touch_control_panel" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_headlights_adaptive_lighting_system" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_headlights_automatic_headlight_leveling" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_headlights_fog_lights" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_headlights_headlight_washer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_headlights_headlights" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_headlights_high_beam_control_system" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_headlights_light_sensor" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_headlights_rain_sensor" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_aux" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_bluetooth" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_car_play" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_cassette" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_cd" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_dvd" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_multimedia_system_for_rear_passengers" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_navigation_system" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_subwoofer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_tv" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_usb" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_multimedia_voice_control" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_other_airbox" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_other_crankcase_protection" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_other_gas_equipment" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_other_number_of_keys" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_other_spare_wheel" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_other_tow_bar" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_other_transverse_arches" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_other_winch" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_protection_authors_security_system" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_protection_central_locking" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_protection_immobilizer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_protection_interior_intrusion_sensor" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_protection_label" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_protection_signaling" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_safety_airbags" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_safety_armored_body" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_safety_auxiliary_systems" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_safety_era-glonass" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_safety_isofix" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_safety_locking" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "complectation_comforts";

-- DropTable
DROP TABLE "complectation_headlights";

-- DropTable
DROP TABLE "complectation_multimedias";

-- DropTable
DROP TABLE "complectation_others";

-- DropTable
DROP TABLE "complectation_protections";

-- DropTable
DROP TABLE "complectation_safeties";
