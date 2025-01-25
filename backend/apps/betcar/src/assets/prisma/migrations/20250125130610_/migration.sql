-- CreateTable
CREATE TABLE "turnkey_selections" (
    "turnkey_selection_id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "autoModel" TEXT NOT NULL DEFAULT '',
    "mileage" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "gearbox_type" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "drive_type" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "year_of_issue" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "colors" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "engine_type" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "turnkey_selections_pkey" PRIMARY KEY ("turnkey_selection_id")
);
