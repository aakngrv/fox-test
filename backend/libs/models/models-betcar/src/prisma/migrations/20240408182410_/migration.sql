/*
  Warnings:

  - You are about to drop the column `report_id` on the `additional_documents` table. All the data in the column will be lost.
  - You are about to drop the column `car_type` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `engines_modification` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `engines_number` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `generation` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `have_a_service_book` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `is_emergency` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `is_metallic` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `is_new_car` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `is_not_installed` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `is_not_on_track` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `mileage` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `tcp` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `total_comment` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `report_id` on the `sts` table. All the data in the column will be lost.
  - You are about to drop the column `availability_tcp` on the `tcps` table. All the data in the column will be lost.
  - You are about to drop the column `chassis` on the `tcps` table. All the data in the column will be lost.
  - You are about to drop the column `date_of_issue` on the `tcps` table. All the data in the column will be lost.
  - You are about to drop the column `file` on the `tcps` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `tcps` table. All the data in the column will be lost.
  - You are about to drop the column `number_of_owners` on the `tcps` table. All the data in the column will be lost.
  - You are about to drop the column `series` on the `tcps` table. All the data in the column will be lost.
  - You are about to drop the column `video` on the `tcps` table. All the data in the column will be lost.
  - The `photo` column on the `tcps` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "additional_documents" DROP CONSTRAINT "additional_documents_report_id_fkey";

-- DropForeignKey
ALTER TABLE "sts" DROP CONSTRAINT "sts_report_id_fkey";

-- DropForeignKey
ALTER TABLE "tcps" DROP CONSTRAINT "tcps_report_id_fkey";

-- AlterTable
ALTER TABLE "additional_documents" DROP COLUMN "report_id";

-- AlterTable
ALTER TABLE "cars_datas" DROP COLUMN "car_type",
DROP COLUMN "engines_modification",
DROP COLUMN "engines_number",
DROP COLUMN "generation",
DROP COLUMN "have_a_service_book",
DROP COLUMN "is_emergency",
DROP COLUMN "is_metallic",
DROP COLUMN "is_new_car",
DROP COLUMN "is_not_installed",
DROP COLUMN "is_not_on_track",
DROP COLUMN "mileage",
DROP COLUMN "tcp",
DROP COLUMN "total_comment",
ADD COLUMN     "enginesNumber" TEXT[],
ADD COLUMN     "service_book" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "steerint_wheel_location" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "sts" DROP COLUMN "report_id";

-- AlterTable
ALTER TABLE "tcps" DROP COLUMN "availability_tcp",
DROP COLUMN "chassis",
DROP COLUMN "date_of_issue",
DROP COLUMN "file",
DROP COLUMN "number",
DROP COLUMN "number_of_owners",
DROP COLUMN "series",
DROP COLUMN "video",
ADD COLUMN     "absent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "tcp_type" TEXT NOT NULL DEFAULT '',
DROP COLUMN "photo",
ADD COLUMN     "photo" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AddForeignKey
ALTER TABLE "tcps" ADD CONSTRAINT "tcps_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;
