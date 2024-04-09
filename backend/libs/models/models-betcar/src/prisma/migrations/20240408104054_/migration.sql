/*
  Warnings:

  - You are about to drop the column `checkpoint_` on the `service_inspections` table. All the data in the column will be lost.
  - You are about to drop the column `transfer_case_` on the `service_inspections` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sellers_details" ADD COLUMN     "link_to_ad" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "refusal_of_inspection" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "service_inspections" DROP COLUMN "checkpoint_",
DROP COLUMN "transfer_case_",
ADD COLUMN     "checkpoint_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "transfer_case_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[];
