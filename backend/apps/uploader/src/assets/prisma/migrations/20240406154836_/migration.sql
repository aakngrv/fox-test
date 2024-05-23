-- CreateTable
CREATE TABLE "ServiceInspection" (
    "sercice_ispection_id" SERIAL NOT NULL,
    "compression_heck" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "endoscope_check" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "engine_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "checkpoint_" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "power_steering_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "transfer_case_" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "rear_axle_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "front_axle_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "steering_rack_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "chassis_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "ServiceInspection_pkey" PRIMARY KEY ("sercice_ispection_id")
);
