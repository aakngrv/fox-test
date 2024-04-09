/*
  Warnings:

  - You are about to drop the column `file` on the `additional_documents` table. All the data in the column will be lost.
  - You are about to drop the column `video` on the `additional_documents` table. All the data in the column will be lost.
  - The `photo` column on the `additional_documents` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `additionalDocuments` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `enginesNumber` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `sts` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `date_of_issue` on the `sts` table. All the data in the column will be lost.
  - You are about to drop the column `file` on the `sts` table. All the data in the column will be lost.
  - You are about to drop the column `is_absent` on the `sts` table. All the data in the column will be lost.
  - You are about to drop the column `issued_by` on the `sts` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `sts` table. All the data in the column will be lost.
  - You are about to drop the column `series` on the `sts` table. All the data in the column will be lost.
  - You are about to drop the column `video` on the `sts` table. All the data in the column will be lost.
  - Added the required column `car_data_id` to the `additional_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_id` to the `sts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "additional_documents" DROP COLUMN "file",
DROP COLUMN "video",
ADD COLUMN     "car_data_id" INTEGER NOT NULL,
DROP COLUMN "photo",
ADD COLUMN     "photo" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "cars_datas" DROP COLUMN "additionalDocuments",
DROP COLUMN "comment",
DROP COLUMN "enginesNumber",
DROP COLUMN "sts";

-- AlterTable
ALTER TABLE "sts" DROP COLUMN "date_of_issue",
DROP COLUMN "file",
DROP COLUMN "is_absent",
DROP COLUMN "issued_by",
DROP COLUMN "number",
DROP COLUMN "series",
DROP COLUMN "video",
ADD COLUMN     "absent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "report_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "engine_numbers" (
    "engine_number_id" SERIAL NOT NULL,
    "car_data_id" INTEGER NOT NULL,
    "expert_confirm" BOOLEAN NOT NULL DEFAULT false,
    "number_state" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "photo" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "engine_numbers_pkey" PRIMARY KEY ("engine_number_id")
);

-- AddForeignKey
ALTER TABLE "engine_numbers" ADD CONSTRAINT "engine_numbers_car_data_id_fkey" FOREIGN KEY ("car_data_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "additional_documents" ADD CONSTRAINT "additional_documents_car_data_id_fkey" FOREIGN KEY ("car_data_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sts" ADD CONSTRAINT "sts_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;
