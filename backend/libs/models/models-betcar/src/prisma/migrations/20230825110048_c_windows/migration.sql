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

    CONSTRAINT "complectation_tires_pkey" PRIMARY KEY ("complectatin_tires_id")
);
