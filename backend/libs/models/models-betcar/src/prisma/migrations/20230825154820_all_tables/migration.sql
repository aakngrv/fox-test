-- AlterTable
ALTER TABLE "additional_documents" ADD COLUMN     "fail" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "video" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "complectation_tires" ADD COLUMN     "seasonality" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "sts" ADD COLUMN     "fail" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "video" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "tcp" ADD COLUMN     "fail" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "video" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "paintwork_inspection_displays" (
    "paintwork_inspection_display_id" SERIAL NOT NULL,
    "maximum_thickness" TEXT NOT NULL DEFAULT '',
    "condition" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "paintwork_inspection_displays_pkey" PRIMARY KEY ("paintwork_inspection_display_id")
);

-- CreateTable
CREATE TABLE "paintwork_inspections" (
    "paintwork_inspection_id" SERIAL NOT NULL,
    "factory_color" BOOLEAN NOT NULL DEFAULT false,
    "hood" BOOLEAN NOT NULL DEFAULT false,
    "roof" BOOLEAN NOT NULL DEFAULT false,
    "left_front_fender" BOOLEAN NOT NULL DEFAULT false,
    "left_front_pillar" BOOLEAN NOT NULL DEFAULT false,
    "left_front_door" BOOLEAN NOT NULL DEFAULT false,
    "left_threshold" BOOLEAN NOT NULL DEFAULT false,
    "left_center_pillar" BOOLEAN NOT NULL DEFAULT false,
    "left_rear_door" BOOLEAN NOT NULL DEFAULT false,
    "left_rear_pillar" BOOLEAN NOT NULL DEFAULT false,
    "left_rear_fender" BOOLEAN NOT NULL DEFAULT false,
    "trunk_lid" BOOLEAN NOT NULL DEFAULT false,
    "right_front_fender" BOOLEAN NOT NULL DEFAULT false,
    "right_front_pillar" BOOLEAN NOT NULL DEFAULT false,
    "right_front_door" BOOLEAN NOT NULL DEFAULT false,
    "right_threshold" BOOLEAN NOT NULL DEFAULT false,
    "right_center_pillar" BOOLEAN NOT NULL DEFAULT false,
    "right_rear_door" BOOLEAN NOT NULL DEFAULT false,
    "right_rear_pillar" BOOLEAN NOT NULL DEFAULT false,
    "right_rear_fender" BOOLEAN NOT NULL DEFAULT false,
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "paintwork_inspections_pkey" PRIMARY KEY ("paintwork_inspection_id")
);

-- CreateTable
CREATE TABLE "front_side_damages" (
    "front_side_damage_id" SERIAL NOT NULL,
    "fog_lights" BOOLEAN NOT NULL DEFAULT false,
    "radiator_grille" BOOLEAN NOT NULL DEFAULT false,
    "front_bumper" BOOLEAN NOT NULL DEFAULT false,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "right_headlight" BOOLEAN NOT NULL DEFAULT false,
    "left_headlight" BOOLEAN NOT NULL DEFAULT false,
    "hood" BOOLEAN NOT NULL DEFAULT false,
    "add_element" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "front_side_damages_pkey" PRIMARY KEY ("front_side_damage_id")
);

-- CreateTable
CREATE TABLE "left_side_damages" (
    "left_side_damage_id" SERIAL NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "left_front_fender" BOOLEAN NOT NULL DEFAULT false,
    "left_front_pillar" BOOLEAN NOT NULL DEFAULT false,
    "left_front_door" BOOLEAN NOT NULL DEFAULT false,
    "left_center_pillar" BOOLEAN NOT NULL DEFAULT false,
    "left_rear_door" BOOLEAN NOT NULL DEFAULT false,
    "left_rear_pillar" BOOLEAN NOT NULL DEFAULT false,
    "left_rear_fender" BOOLEAN NOT NULL DEFAULT false,
    "left_mirror" BOOLEAN NOT NULL DEFAULT false,
    "left_threshold" BOOLEAN NOT NULL DEFAULT false,
    "add_element" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "left_side_damages_pkey" PRIMARY KEY ("left_side_damage_id")
);

-- CreateTable
CREATE TABLE "back_side_damages" (
    "back_side_damage_id" SERIAL NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "tailgate" BOOLEAN NOT NULL DEFAULT false,
    "rear_bumper" BOOLEAN NOT NULL DEFAULT false,
    "left_lamp" BOOLEAN NOT NULL DEFAULT false,
    "right_lamp" BOOLEAN NOT NULL DEFAULT false,
    "add_element" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "back_side_damages_pkey" PRIMARY KEY ("back_side_damage_id")
);

-- CreateTable
CREATE TABLE "right_side_damages" (
    "right_side_damage_id" SERIAL NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "right_front_fender" BOOLEAN NOT NULL DEFAULT false,
    "right_front_pillar" BOOLEAN NOT NULL DEFAULT false,
    "right_front_door" BOOLEAN NOT NULL DEFAULT false,
    "right_center_pillar" BOOLEAN NOT NULL DEFAULT false,
    "right_rear_door" BOOLEAN NOT NULL DEFAULT false,
    "right_rear_pillar" BOOLEAN NOT NULL DEFAULT false,
    "right_rear_fender" BOOLEAN NOT NULL DEFAULT false,
    "right_mirror" BOOLEAN NOT NULL DEFAULT false,
    "right_threshold" BOOLEAN NOT NULL DEFAULT false,
    "add_element" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "right_side_damages_pkey" PRIMARY KEY ("right_side_damage_id")
);

-- CreateTable
CREATE TABLE "roof_damages" (
    "roof_damage_id" SERIAL NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "roof_rails" BOOLEAN NOT NULL DEFAULT false,
    "roof" BOOLEAN NOT NULL DEFAULT false,
    "luke" BOOLEAN NOT NULL DEFAULT false,
    "add_element" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "roof_damages_pkey" PRIMARY KEY ("roof_damage_id")
);

-- CreateTable
CREATE TABLE "glass_damages" (
    "glass_damage_id" SERIAL NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "windshield" BOOLEAN NOT NULL DEFAULT false,
    "left_front_glass" BOOLEAN NOT NULL DEFAULT false,
    "left_rear_glass" BOOLEAN NOT NULL DEFAULT false,
    "rear_glass" BOOLEAN NOT NULL DEFAULT false,
    "right_front_glass" BOOLEAN NOT NULL DEFAULT false,
    "right_rear_glass" BOOLEAN NOT NULL DEFAULT false,
    "add_element" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "glass_damages_pkey" PRIMARY KEY ("glass_damage_id")
);

-- CreateTable
CREATE TABLE "disc_damages" (
    "disc_damage_id" SERIAL NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "left_front_disc" BOOLEAN NOT NULL DEFAULT false,
    "left_rear_disc" BOOLEAN NOT NULL DEFAULT false,
    "right_front_disc" BOOLEAN NOT NULL DEFAULT false,
    "right_rear_disc" BOOLEAN NOT NULL DEFAULT false,
    "add_element" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "disc_damages_pkey" PRIMARY KEY ("disc_damage_id")
);

-- CreateTable
CREATE TABLE "interior_damages" (
    "interior_damage_id" SERIAL NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "torpedo" BOOLEAN NOT NULL DEFAULT false,
    "drivers_seat" BOOLEAN NOT NULL DEFAULT false,
    "passenger_seat" BOOLEAN NOT NULL DEFAULT false,
    "rear_seat" BOOLEAN NOT NULL DEFAULT false,
    "salon_arpet" BOOLEAN NOT NULL DEFAULT false,
    "ceiling" BOOLEAN NOT NULL DEFAULT false,
    "trunk" BOOLEAN NOT NULL DEFAULT false,
    "add_element" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "interior_damages_pkey" PRIMARY KEY ("interior_damage_id")
);

-- CreateTable
CREATE TABLE "extetior_photos" (
    "exterior_photo_id" SERIAL NOT NULL,
    "right_front_photo" TEXT NOT NULL DEFAULT '',
    "right_front_video" TEXT NOT NULL DEFAULT '',
    "front_photo" TEXT NOT NULL DEFAULT '',
    "front_video" TEXT NOT NULL DEFAULT '',
    "left_front_photo" TEXT NOT NULL DEFAULT '',
    "left_front_video" TEXT NOT NULL DEFAULT '',
    "right_back_photo" TEXT NOT NULL DEFAULT '',
    "right_back_video" TEXT NOT NULL DEFAULT '',
    "back_photo" TEXT NOT NULL DEFAULT '',
    "back_video" TEXT NOT NULL DEFAULT '',
    "left_back_photo" TEXT NOT NULL DEFAULT '',
    "left_back_video" TEXT NOT NULL DEFAULT '',
    "left_photo" TEXT NOT NULL DEFAULT '',
    "left_video" TEXT NOT NULL DEFAULT '',
    "right_photo" TEXT NOT NULL DEFAULT '',
    "right_video" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "extetior_photos_pkey" PRIMARY KEY ("exterior_photo_id")
);

-- CreateTable
CREATE TABLE "interior_photos" (
    "interior_photo_id" SERIAL NOT NULL,
    "front_seats_photo" TEXT NOT NULL DEFAULT '',
    "front_seats_video" TEXT NOT NULL DEFAULT '',
    "transmission_photo" TEXT NOT NULL DEFAULT '',
    "transmission_video" TEXT NOT NULL DEFAULT '',
    "dashboard_photo" TEXT NOT NULL DEFAULT '',
    "dashboard_video" TEXT NOT NULL DEFAULT '',
    "driver_seat_photo" TEXT NOT NULL DEFAULT '',
    "driver_seat_video" TEXT NOT NULL DEFAULT '',
    "back_seats_photo" TEXT NOT NULL DEFAULT '',
    "back_seats_video" TEXT NOT NULL DEFAULT '',
    "trunk_photo" TEXT NOT NULL DEFAULT '',
    "trunk_video" TEXT NOT NULL DEFAULT '',
    "engine_photo" TEXT NOT NULL DEFAULT '',
    "engine_video" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "interior_photos_pkey" PRIMARY KEY ("interior_photo_id")
);

-- CreateTable
CREATE TABLE "round_view_videous" (
    "round_view_video_id" SERIAL NOT NULL,
    "video" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL DEFAULT '',
    "fail" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "round_view_videous_pkey" PRIMARY KEY ("round_view_video_id")
);

-- CreateTable
CREATE TABLE "stopped_engines" (
    "stopped_engine_id" SERIAL NOT NULL,
    "car_dismantled" BOOLEAN NOT NULL DEFAULT false,
    "engine_oil_level" BOOLEAN NOT NULL DEFAULT false,
    "gearbox_oil_level" BOOLEAN NOT NULL DEFAULT false,
    "gur_liquid_level" BOOLEAN NOT NULL DEFAULT false,
    "coolant_level" BOOLEAN NOT NULL DEFAULT false,
    "condition" BOOLEAN NOT NULL DEFAULT false,
    "dvs" BOOLEAN NOT NULL DEFAULT false,
    "kpp" BOOLEAN NOT NULL DEFAULT false,
    "gur" BOOLEAN NOT NULL DEFAULT false,
    "dispensing_mechanism" BOOLEAN NOT NULL DEFAULT false,
    "shock_absorbers" BOOLEAN NOT NULL DEFAULT false,
    "front_axle" BOOLEAN NOT NULL DEFAULT false,
    "rear_axle" BOOLEAN NOT NULL DEFAULT false,
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "stopped_engines_pkey" PRIMARY KEY ("stopped_engine_id")
);

-- CreateTable
CREATE TABLE "running_engines" (
    "running_engine_id" SERIAL NOT NULL,
    "dvs_wont_start" BOOLEAN NOT NULL DEFAULT false,
    "total_comment" TEXT NOT NULL DEFAULT '',
    "engine_video" TEXT NOT NULL DEFAULT '',
    "engine_photo" TEXT NOT NULL DEFAULT '',
    "engine_file" TEXT NOT NULL DEFAULT '',
    "seat_heating" BOOLEAN NOT NULL DEFAULT false,
    "audio_system" BOOLEAN NOT NULL DEFAULT false,
    "battery" BOOLEAN NOT NULL DEFAULT false,
    "lighting_engineering" BOOLEAN NOT NULL DEFAULT false,
    "steering" BOOLEAN NOT NULL DEFAULT false,
    "gearshift" BOOLEAN NOT NULL DEFAULT false,
    "engine_operation" BOOLEAN NOT NULL DEFAULT false,
    "power_steering" BOOLEAN NOT NULL DEFAULT false,
    "air_conditioner" BOOLEAN NOT NULL DEFAULT false,
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "running_engines_pkey" PRIMARY KEY ("running_engine_id")
);

-- CreateTable
CREATE TABLE "dashboards" (
    "dashboard_id" SERIAL NOT NULL,
    "check_engine" BOOLEAN NOT NULL DEFAULT false,
    "oil_pressure" BOOLEAN NOT NULL DEFAULT false,
    "airbag" BOOLEAN NOT NULL DEFAULT false,
    "mileage_on_dashboard" TEXT NOT NULL DEFAULT '',
    "mileage_in_the_engine_block" TEXT NOT NULL DEFAULT '',
    "mileage_in_the_gearbox" TEXT NOT NULL DEFAULT '',
    "mileage_in_additional_blocks" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "dashboards_pkey" PRIMARY KEY ("dashboard_id")
);

-- CreateTable
CREATE TABLE "tests_drive" (
    "test_drive_id" SERIAL NOT NULL,
    "tes_drive" BOOLEAN NOT NULL DEFAULT false,
    "engine" BOOLEAN NOT NULL DEFAULT false,
    "transmission" BOOLEAN NOT NULL DEFAULT false,
    "suspension" BOOLEAN NOT NULL DEFAULT false,
    "brake_system" BOOLEAN NOT NULL DEFAULT false,
    "parking_brake" BOOLEAN NOT NULL DEFAULT false,
    "electronic_diagnostics" BOOLEAN NOT NULL DEFAULT false,
    "diagnostics_file" TEXT NOT NULL DEFAULT '',
    "diagnostic_results" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "tests_drive_pkey" PRIMARY KEY ("test_drive_id")
);

-- CreateTable
CREATE TABLE "experts_opinions" (
    "expert_opinion" SERIAL NOT NULL,
    "plus_comment" TEXT NOT NULL DEFAULT '',
    "minus_comment" TEXT NOT NULL DEFAULT '',
    "total_comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "experts_opinions_pkey" PRIMARY KEY ("expert_opinion")
);
