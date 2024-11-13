/*
  Warnings:

  - You are about to drop the `service_inspections` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "service_inspection_compression_heck" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "service_inspectionchassis_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "service_inspectioncheckpoint_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "service_inspectionendoscope_check" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "service_inspectionengine_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "service_inspectionfront_axle_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "service_inspectionpower_steering_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "service_inspectionrear_axle_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "service_inspectionsteering_rack_ispection" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "service_inspectiontransfer_case_inspection" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- DropTable
DROP TABLE "service_inspections";
