/*
  Warnings:

  - You are about to drop the column `autoModel` on the `turnkey_selections` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "turnkey_selections" DROP COLUMN "autoModel",
ADD COLUMN     "auto_model" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "turnkey_selections_manually" (
    "turnkey_selection_manually_id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "auto_model" TEXT NOT NULL DEFAULT '',
    "auto_mark" TEXT NOT NULL DEFAULT '',
    "year_of_issue" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "colors" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "inspection_region" TEXT NOT NULL DEFAULT '',
    "seller_phone" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "turnkey_selections_manually_pkey" PRIMARY KEY ("turnkey_selection_manually_id")
);
