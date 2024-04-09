-- CreateTable
CREATE TABLE "reports" (
    "report_id" SERIAL NOT NULL,
    "executor_id" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publish_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("report_id")
);

-- CreateTable
CREATE TABLE "sellers_details" (
    "seller_details_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "refusal_of_inspection" BOOLEAN NOT NULL DEFAULT false,
    "link_to_ad" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "name" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "car_cost" TEXT NOT NULL DEFAULT '',
    "is_bargain" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "sellers_details_pkey" PRIMARY KEY ("seller_details_id")
);

-- CreateTable
CREATE TABLE "cars_datas" (
    "car_data_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "car_brand" TEXT NOT NULL DEFAULT '',
    "car_model" TEXT NOT NULL DEFAULT '',
    "manufacture_year" TEXT NOT NULL DEFAULT '',
    "color" TEXT NOT NULL DEFAULT '',
    "body_type" TEXT NOT NULL DEFAULT '',
    "engines_type" TEXT NOT NULL DEFAULT '',
    "gearbox_type" TEXT NOT NULL DEFAULT '',
    "drive_unit" TEXT NOT NULL DEFAULT '',
    "steerint_wheel_location" TEXT NOT NULL DEFAULT '',
    "modification" TEXT NOT NULL DEFAULT '',
    "engine_capacity" TEXT NOT NULL DEFAULT '',
    "power" TEXT NOT NULL DEFAULT '',
    "service_book" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "cars_datas_pkey" PRIMARY KEY ("car_data_id")
);

-- CreateTable
CREATE TABLE "vin_body_numbers" (
    "vin_body_number_id" SERIAL NOT NULL,
    "car_data_id" INTEGER NOT NULL,
    "vin_number" TEXT NOT NULL DEFAULT '',
    "expert_confirm" BOOLEAN NOT NULL DEFAULT false,
    "number_state" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "photo" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "vin_body_numbers_pkey" PRIMARY KEY ("vin_body_number_id")
);

-- CreateTable
CREATE TABLE "frame_numbers" (
    "frame_number_id" SERIAL NOT NULL,
    "car_data_id" INTEGER NOT NULL,
    "frame_number" TEXT NOT NULL DEFAULT '',
    "expert_confirm" BOOLEAN NOT NULL DEFAULT false,
    "number_state" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "photo" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "frame_numbers_pkey" PRIMARY KEY ("frame_number_id")
);

-- CreateTable
CREATE TABLE "state_numbers" (
    "state_number_id" SERIAL NOT NULL,
    "car_data_id" INTEGER NOT NULL,
    "absent" BOOLEAN NOT NULL DEFAULT false,
    "foreign" BOOLEAN NOT NULL DEFAULT false,
    "state_number" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "state_numbers_pkey" PRIMARY KEY ("state_number_id")
);

-- CreateTable
CREATE TABLE "tcps" (
    "tcp_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "absent" BOOLEAN NOT NULL DEFAULT false,
    "tcp_type" TEXT NOT NULL DEFAULT '',
    "photo" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "tcps_pkey" PRIMARY KEY ("tcp_id")
);

-- CreateTable
CREATE TABLE "engine_numbers" (
    "engine_number_id" SERIAL NOT NULL,
    "car_data_id" INTEGER NOT NULL,
    "expert_confirm" BOOLEAN NOT NULL DEFAULT false,
    "number_state" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "photo" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "engine_numbers_pkey" PRIMARY KEY ("engine_number_id")
);

-- CreateTable
CREATE TABLE "additional_documents" (
    "additional_documents_id" SERIAL NOT NULL,
    "car_data_id" INTEGER NOT NULL,
    "comment" TEXT NOT NULL DEFAULT '',
    "photo" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "additional_documents_pkey" PRIMARY KEY ("additional_documents_id")
);

-- CreateTable
CREATE TABLE "sts" (
    "sts_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "absent" BOOLEAN NOT NULL DEFAULT false,
    "photo" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "sts_pkey" PRIMARY KEY ("sts_id")
);

-- CreateTable
CREATE TABLE "locations" (
    "location_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "country" TEXT NOT NULL DEFAULT '',
    "region" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "locations_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "complectation_bodies" (
    "complectation_body_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "roof_rails" BOOLEAN NOT NULL DEFAULT false,
    "body_stickers" BOOLEAN NOT NULL DEFAULT false,
    "airbrushing" BOOLEAN NOT NULL DEFAULT false,
    "body_in_film" BOOLEAN NOT NULL DEFAULT false,
    "body_tuning" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "complectation_bodies_pkey" PRIMARY KEY ("complectation_body_id")
);

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
    "front_left_options" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "back_left_options" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "front_right_options" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "back_right_options" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "front_left_wear" TEXT NOT NULL DEFAULT '',
    "back_left_wear" TEXT NOT NULL DEFAULT '',
    "front_right_wear" TEXT NOT NULL DEFAULT '',
    "back_right_wear" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "complectation_wheels_pkey" PRIMARY KEY ("complectation_wheels_id")
);

-- CreateTable
CREATE TABLE "complectation_salons" (
    "complectation_salon_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "luke" BOOLEAN NOT NULL DEFAULT false,
    "seat_covers" BOOLEAN NOT NULL DEFAULT false,
    "panoramic_view" BOOLEAN NOT NULL DEFAULT false,
    "third_row_of_seats" BOOLEAN NOT NULL DEFAULT false,
    "tinted_glass" BOOLEAN NOT NULL DEFAULT false,
    "steering_wheel_heating" BOOLEAN NOT NULL DEFAULT false,
    "leather_trimmed_gearshift_lever" BOOLEAN NOT NULL DEFAULT false,
    "sports_front_seats" BOOLEAN NOT NULL DEFAULT false,
    "steering_wheel_leather_trim" BOOLEAN NOT NULL DEFAULT false,
    "folding_rear_seat" BOOLEAN NOT NULL DEFAULT false,
    "front_center_armrest" BOOLEAN NOT NULL DEFAULT false,
    "interior_material" TEXT NOT NULL DEFAULT '',
    "heated_seats" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "seat_height_adjustment" TEXT NOT NULL DEFAULT '',
    "electrically_adjustable_seats" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "seat_position_memory" TEXT NOT NULL DEFAULT '',
    "seat_ventilation" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "seat_massage" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "complectation_salons_pkey" PRIMARY KEY ("complectation_salon_id")
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
CREATE TABLE "complectation_multimedias" (
    "complectation_multimedia_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "cd" BOOLEAN NOT NULL DEFAULT false,
    "tv" BOOLEAN NOT NULL DEFAULT false,
    "usb" BOOLEAN NOT NULL DEFAULT false,
    "aux" BOOLEAN NOT NULL DEFAULT false,
    "dvd" BOOLEAN NOT NULL DEFAULT false,
    "cassette" BOOLEAN NOT NULL DEFAULT false,
    "car_play" BOOLEAN NOT NULL DEFAULT false,
    "bluetooth" BOOLEAN NOT NULL DEFAULT false,
    "subwoofer" BOOLEAN NOT NULL DEFAULT false,
    "voice_control" BOOLEAN NOT NULL DEFAULT false,
    "navigation_system" BOOLEAN NOT NULL DEFAULT false,
    "multimedia_system_for_rear_passengers" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "complectation_multimedias_pkey" PRIMARY KEY ("complectation_multimedia_id")
);

-- CreateTable
CREATE TABLE "complectation_comforts" (
    "complectation_comfort_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "start-stop_system" BOOLEAN NOT NULL DEFAULT false,
    "on_board_computer" BOOLEAN NOT NULL DEFAULT false,
    "electric_mirrors" BOOLEAN NOT NULL DEFAULT false,
    "preheater" BOOLEAN NOT NULL DEFAULT false,
    "engine_start_button" BOOLEAN NOT NULL DEFAULT false,
    "keyless_entry_system" BOOLEAN NOT NULL DEFAULT false,
    "hands-free_trunk_opening" BOOLEAN NOT NULL DEFAULT false,
    "electrofolding_of_mirrors" BOOLEAN NOT NULL DEFAULT false,
    "multifunction_steering_wheel" BOOLEAN NOT NULL DEFAULT false,
    "touch_control_panel" BOOLEAN NOT NULL DEFAULT false,
    "gearshift_paddles" BOOLEAN NOT NULL DEFAULT false,
    "adjustable_pedal_assembly" BOOLEAN NOT NULL DEFAULT false,
    "electronic_dashboard" BOOLEAN NOT NULL DEFAULT false,
    "remote_engine_start" BOOLEAN NOT NULL DEFAULT false,
    "electric_trunk_lid" BOOLEAN NOT NULL DEFAULT false,
    "camera" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "suspension" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "air_conditioner" TEXT NOT NULL DEFAULT '',
    "power_steering" TEXT NOT NULL DEFAULT '',
    "cruise_control" TEXT NOT NULL DEFAULT '',
    "electric_heating" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "steering_wheel_adjustment" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "parking_assistance_system" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "electric_lifts" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "complectation_comforts_pkey" PRIMARY KEY ("complectation_comfort_id")
);

-- CreateTable
CREATE TABLE "complectation_safeties" (
    "complectation_safety_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "era-glonass" BOOLEAN NOT NULL DEFAULT false,
    "locking" BOOLEAN NOT NULL DEFAULT false,
    "armored_body" BOOLEAN NOT NULL DEFAULT false,
    "airbags" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "isofix" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "auxiliary_systems" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "complectation_safeties_pkey" PRIMARY KEY ("complectation_safety_id")
);

-- CreateTable
CREATE TABLE "complectation_protections" (
    "complectation_protection_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "label" BOOLEAN NOT NULL DEFAULT false,
    "immobilizer" BOOLEAN NOT NULL DEFAULT false,
    "central_locking" BOOLEAN NOT NULL DEFAULT false,
    "authors_security_system" BOOLEAN NOT NULL DEFAULT false,
    "interior_intrusion_sensor" BOOLEAN NOT NULL DEFAULT false,
    "signaling" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "complectation_protections_pkey" PRIMARY KEY ("complectation_protection_id")
);

-- CreateTable
CREATE TABLE "complectation_others" (
    "complectation_other_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "tow_bar" BOOLEAN NOT NULL DEFAULT false,
    "winch" BOOLEAN NOT NULL DEFAULT false,
    "airbox" BOOLEAN NOT NULL DEFAULT false,
    "socket_12v" BOOLEAN NOT NULL DEFAULT false,
    "socket_220v" BOOLEAN NOT NULL DEFAULT false,
    "crankcase_protection" BOOLEAN NOT NULL DEFAULT false,
    "transverse_arches" BOOLEAN NOT NULL DEFAULT false,
    "gas_equipment" BOOLEAN NOT NULL DEFAULT false,
    "number_of_keys" TEXT NOT NULL DEFAULT '',
    "spare_wheel" TEXT NOT NULL DEFAULT '',
    "motorist_set" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "complectation_others_pkey" PRIMARY KEY ("complectation_other_id")
);

-- CreateTable
CREATE TABLE "paintwork_inspections" (
    "paintwork_inspection_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "factory_color" BOOLEAN NOT NULL DEFAULT false,
    "body_in_film" BOOLEAN NOT NULL DEFAULT false,
    "roof" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "trunk_lid" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_rear_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_front_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "hood" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_front_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_rear_door_opening" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "paintwork_inspections_pkey" PRIMARY KEY ("paintwork_inspection_id")
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

-- CreateTable
CREATE TABLE "front_side_damages" (
    "front_side_damage_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "fog_lights" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "radiator_grille" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "front_bumper" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_headlight" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_headlight" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "hood" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "front_side_damages_pkey" PRIMARY KEY ("front_side_damage_id")
);

-- CreateTable
CREATE TABLE "add_front_elements" (
    "add_element_front_id" SERIAL NOT NULL,
    "front_side_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_front_elements_pkey" PRIMARY KEY ("add_element_front_id")
);

-- CreateTable
CREATE TABLE "left_side_damages" (
    "left_side_damage_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "left_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_mirror" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "left_side_damages_pkey" PRIMARY KEY ("left_side_damage_id")
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
CREATE TABLE "back_side_damages" (
    "back_side_damage_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "tailgate" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "rear_bumper" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_lamp" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_lamp" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "back_side_damages_pkey" PRIMARY KEY ("back_side_damage_id")
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
CREATE TABLE "right_side_damages" (
    "right_side_damage_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "right_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_mirror" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "right_side_damages_pkey" PRIMARY KEY ("right_side_damage_id")
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
CREATE TABLE "roof_damages" (
    "roof_damage_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "luke" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "roof" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "roof_rails" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "panorama" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "roof_damages_pkey" PRIMARY KEY ("roof_damage_id")
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
CREATE TABLE "glass_damages" (
    "glass_damage_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "windshield" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_front_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_rear_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "rear_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_front_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_rear_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "glass_damages_pkey" PRIMARY KEY ("glass_damage_id")
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
CREATE TABLE "disc_damages" (
    "disc_damage_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "left_front_disc" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "left_rear_disc" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_front_disc" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "right_rear_disc" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "disc_damages_pkey" PRIMARY KEY ("disc_damage_id")
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
CREATE TABLE "interior_damages" (
    "interior_damage_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "without_damage" BOOLEAN NOT NULL DEFAULT false,
    "front_left_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "drivers_seat" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "salon_carpet" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "torpedo" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "ceiling" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "back_left_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "back_seat" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "back_right_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "front_right_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "passenger_seat" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "sleeping_compartment" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "interior_damages_pkey" PRIMARY KEY ("interior_damage_id")
);

-- CreateTable
CREATE TABLE "add_interior_elements" (
    "add_element_interior_id" SERIAL NOT NULL,
    "interior_damage_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_interior_elements_pkey" PRIMARY KEY ("add_element_interior_id")
);

-- CreateTable
CREATE TABLE "exterior_photos" (
    "exterior_photo_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "right_front_photo" TEXT NOT NULL DEFAULT '',
    "front_photo" TEXT NOT NULL DEFAULT '',
    "left_front_photo" TEXT NOT NULL DEFAULT '',
    "right_back_photo" TEXT NOT NULL DEFAULT '',
    "back_photo" TEXT NOT NULL DEFAULT '',
    "left_back_photo" TEXT NOT NULL DEFAULT '',
    "left_photo" TEXT NOT NULL DEFAULT '',
    "right_photo" TEXT NOT NULL DEFAULT '',
    "hood_open" TEXT NOT NULL DEFAULT '',
    "trunk_open" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "exterior_photos_pkey" PRIMARY KEY ("exterior_photo_id")
);

-- CreateTable
CREATE TABLE "interior_photos" (
    "interior_photo_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "left_front_door" TEXT NOT NULL DEFAULT '',
    "driver_seat_photo" TEXT NOT NULL DEFAULT '',
    "steering_wheel_photo" TEXT NOT NULL DEFAULT '',
    "dashboard_photo" TEXT NOT NULL DEFAULT '',
    "left_back_door" TEXT NOT NULL DEFAULT '',
    "back_left_seats_photo" TEXT NOT NULL DEFAULT '',
    "front_seats_photo" TEXT NOT NULL DEFAULT '',
    "right_back_door" TEXT NOT NULL DEFAULT '',
    "back_right_seats_photo" TEXT NOT NULL DEFAULT '',
    "right_front_door" TEXT NOT NULL DEFAULT '',
    "passenger_seat_photo" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "interior_photos_pkey" PRIMARY KEY ("interior_photo_id")
);

-- CreateTable
CREATE TABLE "round_view_videous" (
    "round_view_video_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "video" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "round_view_videous_pkey" PRIMARY KEY ("round_view_video_id")
);

-- CreateTable
CREATE TABLE "stopped_engines" (
    "stopped_engine_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "is_new" BOOLEAN NOT NULL DEFAULT false,
    "is_not_go" BOOLEAN NOT NULL DEFAULT false,
    "is_emergency" BOOLEAN NOT NULL DEFAULT false,
    "is_understaffed" BOOLEAN NOT NULL DEFAULT false,
    "comment" TEXT NOT NULL DEFAULT '',
    "engine_oil_level" TEXT NOT NULL DEFAULT '',
    "gearbox_oil_level" TEXT NOT NULL DEFAULT '',
    "gur_liquid_level" TEXT NOT NULL DEFAULT '',
    "brake_fluid_level" TEXT NOT NULL DEFAULT '',
    "coolant_level" TEXT NOT NULL DEFAULT '',
    "technical_fluid_comment" TEXT NOT NULL DEFAULT '',
    "drive_belts" TEXT NOT NULL DEFAULT '',
    "brake_discs" TEXT NOT NULL DEFAULT '',
    "wear_comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "stopped_engines_pkey" PRIMARY KEY ("stopped_engine_id")
);

-- CreateTable
CREATE TABLE "running_engines" (
    "running_engine_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "engine_not_start" BOOLEAN NOT NULL DEFAULT false,
    "comment" TEXT NOT NULL DEFAULT '',
    "engine_video" TEXT NOT NULL DEFAULT '',
    "battery" BOOLEAN NOT NULL DEFAULT false,
    "lighting_engineering" BOOLEAN NOT NULL DEFAULT false,
    "audio_system" BOOLEAN NOT NULL DEFAULT false,
    "heated_steering_wheel" BOOLEAN NOT NULL DEFAULT false,
    "sound_signal" BOOLEAN NOT NULL DEFAULT false,
    "seat_massage" BOOLEAN NOT NULL DEFAULT false,
    "windshield_washers" BOOLEAN NOT NULL DEFAULT false,
    "seat_heating" BOOLEAN NOT NULL DEFAULT false,
    "windscreen_wipers" BOOLEAN NOT NULL DEFAULT false,
    "window_lifters" BOOLEAN NOT NULL DEFAULT false,
    "electric_sunroof" BOOLEAN NOT NULL DEFAULT false,
    "electric_steering_wheel" BOOLEAN NOT NULL DEFAULT false,
    "electric_seats" BOOLEAN NOT NULL DEFAULT false,
    "electric_panorama" BOOLEAN NOT NULL DEFAULT false,
    "heated_windshield" BOOLEAN NOT NULL DEFAULT false,
    "electric_trunk_drive" BOOLEAN NOT NULL DEFAULT false,
    "electric_system_comment" TEXT NOT NULL DEFAULT '',
    "gearbox_switching" BOOLEAN NOT NULL DEFAULT false,
    "engine_operation" BOOLEAN NOT NULL DEFAULT false,
    "interior_heater" BOOLEAN NOT NULL DEFAULT false,
    "power_steering" BOOLEAN NOT NULL DEFAULT false,
    "air_conditioner" BOOLEAN NOT NULL DEFAULT false,
    "mechanical_system_comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "running_engines_pkey" PRIMARY KEY ("running_engine_id")
);

-- CreateTable
CREATE TABLE "dashboards" (
    "dashboard_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "abs" BOOLEAN NOT NULL DEFAULT false,
    "airbag" BOOLEAN NOT NULL DEFAULT false,
    "check_engine" BOOLEAN NOT NULL DEFAULT false,
    "battery" BOOLEAN NOT NULL DEFAULT false,
    "tire_pressure" BOOLEAN NOT NULL DEFAULT false,
    "oil_pressure" BOOLEAN NOT NULL DEFAULT false,
    "control_light_comment" TEXT NOT NULL DEFAULT '',
    "electronic_diagnostics" BOOLEAN NOT NULL DEFAULT false,
    "diagnostics_file" TEXT DEFAULT '',
    "diagnostics_result" TEXT NOT NULL DEFAULT '',
    "mileage_on_dashboard" TEXT DEFAULT '',
    "mileage_in_the_engine_block" TEXT DEFAULT '',
    "mileage_in_the_gearbox" TEXT DEFAULT '',
    "mileage_in_additional_blocks" TEXT DEFAULT '',
    "is_no_mileage" BOOLEAN DEFAULT false,
    "total_comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "dashboards_pkey" PRIMARY KEY ("dashboard_id")
);

-- CreateTable
CREATE TABLE "tests_drive" (
    "test_drive_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "tes_drive" BOOLEAN NOT NULL DEFAULT false,
    "suspension" BOOLEAN NOT NULL DEFAULT false,
    "engine" BOOLEAN NOT NULL DEFAULT false,
    "transmission" BOOLEAN NOT NULL DEFAULT false,
    "steering" BOOLEAN NOT NULL DEFAULT false,
    "brake_system" BOOLEAN NOT NULL DEFAULT false,
    "parking_brake" BOOLEAN NOT NULL DEFAULT false,
    "exhaust_system" BOOLEAN NOT NULL DEFAULT false,
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "tests_drive_pkey" PRIMARY KEY ("test_drive_id")
);

-- CreateTable
CREATE TABLE "experts_opinions" (
    "expert_opinion" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "plus_comment" TEXT NOT NULL DEFAULT '',
    "minus_comment" TEXT NOT NULL DEFAULT '',
    "total_comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "experts_opinions_pkey" PRIMARY KEY ("expert_opinion")
);

-- CreateTable
CREATE TABLE "service_inspections" (
    "service_inspection_id" SERIAL NOT NULL,
    "compression_heck" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "endoscope_check" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "engine_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "checkpoint_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "power_steering_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "transfer_case_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "rear_axle_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "front_axle_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "steering_rack_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "chassis_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "service_inspections_pkey" PRIMARY KEY ("service_inspection_id")
);

-- AddForeignKey
ALTER TABLE "sellers_details" ADD CONSTRAINT "sellers_details_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cars_datas" ADD CONSTRAINT "cars_datas_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vin_body_numbers" ADD CONSTRAINT "vin_body_numbers_car_data_id_fkey" FOREIGN KEY ("car_data_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "frame_numbers" ADD CONSTRAINT "frame_numbers_car_data_id_fkey" FOREIGN KEY ("car_data_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "state_numbers" ADD CONSTRAINT "state_numbers_car_data_id_fkey" FOREIGN KEY ("car_data_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tcps" ADD CONSTRAINT "tcps_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engine_numbers" ADD CONSTRAINT "engine_numbers_car_data_id_fkey" FOREIGN KEY ("car_data_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "additional_documents" ADD CONSTRAINT "additional_documents_car_data_id_fkey" FOREIGN KEY ("car_data_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sts" ADD CONSTRAINT "sts_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complectation_bodies" ADD CONSTRAINT "complectation_bodies_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;

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
