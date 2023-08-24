-- CreateTable
CREATE TABLE "cars_models" (
    "car_id" SERIAL NOT NULL,
    "car_model" TEXT NOT NULL DEFAULT '',
    "executor_id" TEXT,

    CONSTRAINT "cars_models_pkey" PRIMARY KEY ("car_id")
);

-- CreateTable
CREATE TABLE "sellers_details" (
    "seller_details_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "car_cost" TEXT NOT NULL DEFAULT '',
    "role" BOOLEAN NOT NULL DEFAULT false,
    "comment" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publish_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sellers_details_pkey" PRIMARY KEY ("seller_details_id")
);

-- CreateTable
CREATE TABLE "vehicles_datas" (
    "vehicle_data_id" SERIAL NOT NULL,
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

    CONSTRAINT "vehicles_datas_pkey" PRIMARY KEY ("vehicle_data_id")
);

-- CreateTable
CREATE TABLE "additional_documents" (
    "additional_documents_id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "additional_documents_pkey" PRIMARY KEY ("additional_documents_id")
);

-- CreateTable
CREATE TABLE "tcp" (
    "tcp_id" SERIAL NOT NULL,
    "availability_tcp" TEXT NOT NULL DEFAULT '',
    "chassis" TEXT NOT NULL DEFAULT '',
    "series" TEXT NOT NULL DEFAULT '',
    "number" TEXT NOT NULL DEFAULT '',
    "date_of_issue" TEXT NOT NULL DEFAULT '',
    "number_of_owners" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "tcp_pkey" PRIMARY KEY ("tcp_id")
);

-- CreateTable
CREATE TABLE "sts" (
    "sts_id" SERIAL NOT NULL,
    "absent" BOOLEAN NOT NULL DEFAULT false,
    "series" TEXT NOT NULL DEFAULT '',
    "number" TEXT NOT NULL DEFAULT '',
    "date_of_issue" TEXT NOT NULL DEFAULT '',
    "issued_by" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "sts_pkey" PRIMARY KEY ("sts_id")
);

-- CreateTable
CREATE TABLE "locations" (
    "location_id" SERIAL NOT NULL,
    "country" TEXT NOT NULL DEFAULT '',
    "region" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "locations_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "complectation-reviews" (
    "complectation_review_id" SERIAL NOT NULL,
    "equipment_name" TEXT NOT NULL DEFAULT '',
    "high_beam_control_system" BOOLEAN NOT NULL DEFAULT false,
    "adaptive_lighting_system" BOOLEAN NOT NULL DEFAULT false,
    "automatic_headlight_range_control" BOOLEAN NOT NULL DEFAULT false,
    "fog_lights" BOOLEAN NOT NULL DEFAULT false,
    "headlight_washer" BOOLEAN NOT NULL DEFAULT false,
    "lights" TEXT NOT NULL DEFAULT '',
    "rain_sensor" BOOLEAN NOT NULL DEFAULT false,
    "light_sensor" BOOLEAN NOT NULL DEFAULT false,
    "electrical_heating" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "complectation-reviews_pkey" PRIMARY KEY ("complectation_review_id")
);

-- CreateTable
CREATE TABLE "complectation-bodies" (
    "complectation_body_id" SERIAL NOT NULL,
    "roof_rails" BOOLEAN NOT NULL DEFAULT false,
    "body_stickers" BOOLEAN NOT NULL DEFAULT false,
    "airbrushing" BOOLEAN NOT NULL DEFAULT false,
    "body_kit" BOOLEAN NOT NULL DEFAULT false,
    "disc_type" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "complectation-bodies_pkey" PRIMARY KEY ("complectation_body_id")
);

-- CreateTable
CREATE TABLE "complectation_protections" (
    "complectation_protection_id" SERIAL NOT NULL,
    "interior_intrusion_sensor" BOOLEAN NOT NULL DEFAULT false,
    "central_locking" BOOLEAN NOT NULL DEFAULT false,
    "immobilizer" BOOLEAN NOT NULL DEFAULT false,
    "signaling" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "complectation_protections_pkey" PRIMARY KEY ("complectation_protection_id")
);

-- CreateTable
CREATE TABLE "complectation_multimedias" (
    "complectation_multimedia_id" SERIAL NOT NULL,
    "bluetooth" BOOLEAN NOT NULL DEFAULT false,
    "cd" BOOLEAN NOT NULL DEFAULT false,
    "usb" BOOLEAN NOT NULL DEFAULT false,
    "aux" BOOLEAN NOT NULL DEFAULT false,
    "dvd" BOOLEAN NOT NULL DEFAULT false,
    "tv" BOOLEAN NOT NULL DEFAULT false,
    "subwoofer" BOOLEAN NOT NULL DEFAULT false,
    "audio_system" TEXT NOT NULL DEFAULT '',
    "multimedia_system_for_rear_passengers" BOOLEAN NOT NULL DEFAULT false,
    "voice_control" BOOLEAN NOT NULL DEFAULT false,
    "navigation_system" BOOLEAN NOT NULL DEFAULT false,
    "socket_220_v" BOOLEAN NOT NULL DEFAULT false,
    "socket_12_v" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "complectation_multimedias_pkey" PRIMARY KEY ("complectation_multimedia_id")
);

-- CreateTable
CREATE TABLE "complectation_salons" (
    "complectation_salon_id" SERIAL NOT NULL,
    "interior_material" TEXT NOT NULL DEFAULT '',
    "interior_color" TEXT NOT NULL DEFAULT '',
    "steering_wheel_leather_trim" BOOLEAN NOT NULL DEFAULT false,
    "leather_trimmed_gearshift_lever" BOOLEAN NOT NULL DEFAULT false,
    "number_of_seats" TEXT NOT NULL DEFAULT '',
    "heated_seats" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "complectation_salons_pkey" PRIMARY KEY ("complectation_salon_id")
);
