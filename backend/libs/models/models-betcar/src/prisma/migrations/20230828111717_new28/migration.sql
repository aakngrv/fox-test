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

-- CreateTable
CREATE TABLE "additional_documents" (
    "additional_documents_id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL DEFAULT '',
    "video" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL DEFAULT '',
    "fail" TEXT NOT NULL DEFAULT '',

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
    "video" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL DEFAULT '',
    "fail" TEXT NOT NULL DEFAULT '',

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
    "video" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL DEFAULT '',
    "fail" TEXT NOT NULL DEFAULT '',

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
    "seat_height_adjustment" TEXT NOT NULL DEFAULT '',
    "power_seats" TEXT NOT NULL DEFAULT '',
    "seat_position_memory" TEXT NOT NULL DEFAULT '',
    "seat_ventilation" TEXT NOT NULL DEFAULT '',
    "front_center_armrest" BOOLEAN NOT NULL DEFAULT false,
    "panoramic_view" BOOLEAN NOT NULL DEFAULT false,
    "folding_rear_seat" BOOLEAN NOT NULL DEFAULT false,
    "sports_front_seats" BOOLEAN NOT NULL DEFAULT false,
    "steering_wheel_heating" BOOLEAN NOT NULL DEFAULT false,
    "tinted_glass" BOOLEAN NOT NULL DEFAULT false,
    "third_row_of_seats" BOOLEAN NOT NULL DEFAULT false,
    "luke" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "complectation_salons_pkey" PRIMARY KEY ("complectation_salon_id")
);

-- CreateTable
CREATE TABLE "complectation_comforts" (
    "complectation_comfort_id" SERIAL NOT NULL,
    "remote_engine_start" BOOLEAN NOT NULL DEFAULT false,
    "engine_start_button" BOOLEAN NOT NULL DEFAULT false,
    "on_board_computer" BOOLEAN NOT NULL DEFAULT false,
    "camera" TEXT NOT NULL DEFAULT '',
    "air_conditioner" TEXT NOT NULL DEFAULT '',
    "cruise_control" TEXT NOT NULL DEFAULT '',
    "steering_wheel_adjustment" TEXT NOT NULL DEFAULT '',
    "parking_assistance_system" TEXT NOT NULL DEFAULT '',
    "power_steering" TEXT NOT NULL DEFAULT '',
    "electric_lifts" TEXT NOT NULL DEFAULT '',
    "programmable_starting_heater" BOOLEAN NOT NULL DEFAULT false,
    "gearshift_paddles" BOOLEAN NOT NULL DEFAULT false,
    "hands-free_trunk_opening" BOOLEAN NOT NULL DEFAULT false,
    "electric_trunk_lid" BOOLEAN NOT NULL DEFAULT false,
    "electronic_dashboard" BOOLEAN NOT NULL DEFAULT false,
    "adjustable_pedal_assembly" BOOLEAN NOT NULL DEFAULT false,
    "multifunction_steering_wheel" BOOLEAN NOT NULL DEFAULT false,
    "keyless_entry_system" BOOLEAN NOT NULL DEFAULT false,
    "electrofolding_of_mirrors" BOOLEAN NOT NULL DEFAULT false,
    "power_mirrors" BOOLEAN NOT NULL DEFAULT false,
    "start-stop_system" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "complectation_comforts_pkey" PRIMARY KEY ("complectation_comfort_id")
);

-- CreateTable
CREATE TABLE "complectation_safeties" (
    "complectation_safety_id" SERIAL NOT NULL,
    "abs" BOOLEAN NOT NULL DEFAULT false,
    "esp" BOOLEAN NOT NULL DEFAULT false,
    "auxiliary_systems" TEXT NOT NULL DEFAULT '',
    "airbags" TEXT NOT NULL DEFAULT '',
    "isofix" TEXT NOT NULL DEFAULT '',
    "rear_door_lock" BOOLEAN NOT NULL DEFAULT false,
    "tire_pressure_sensor" BOOLEAN NOT NULL DEFAULT false,
    "armored_body" BOOLEAN NOT NULL DEFAULT false,
    "era-glonass" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "complectation_safeties_pkey" PRIMARY KEY ("complectation_safety_id")
);

-- CreateTable
CREATE TABLE "complectation_others" (
    "complectation_other_id" SERIAL NOT NULL,
    "suspension" TEXT NOT NULL DEFAULT '',
    "number_of_keys" TEXT NOT NULL DEFAULT '',
    "gas_equipment" BOOLEAN NOT NULL DEFAULT false,
    "spare_wheel" BOOLEAN NOT NULL DEFAULT false,
    "air_suspension" BOOLEAN NOT NULL DEFAULT false,
    "crankcase_protection" BOOLEAN NOT NULL DEFAULT false,
    "autorun" BOOLEAN NOT NULL DEFAULT false,
    "hitch" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "complectation_others_pkey" PRIMARY KEY ("complectation_other_id")
);

-- CreateTable
CREATE TABLE "complectation_tires" (
    "complectatin_tires_id" SERIAL NOT NULL,
    "tire_uniformity" BOOLEAN NOT NULL DEFAULT false,
    "additional_set_of_wheels" BOOLEAN NOT NULL DEFAULT false,
    "seasonality" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "complectation_tires_pkey" PRIMARY KEY ("complectatin_tires_id")
);

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
