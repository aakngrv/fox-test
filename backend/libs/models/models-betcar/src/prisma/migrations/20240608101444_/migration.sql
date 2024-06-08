/*
  Warnings:

  - You are about to drop the `add_paintworkd_elements` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_paintworkd_elements" DROP CONSTRAINT "add_paintworkd_elements_paintwork_inspection_id_fkey";

-- DropTable
DROP TABLE "add_paintworkd_elements";

-- CreateTable
CREATE TABLE "add_paintwork_elements" (
    "add_element_paintwork_id" SERIAL NOT NULL,
    "paintwork_inspection_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_paintwork_elements_pkey" PRIMARY KEY ("add_element_paintwork_id")
);

-- AddForeignKey
ALTER TABLE "add_paintwork_elements" ADD CONSTRAINT "add_paintwork_elements_paintwork_inspection_id_fkey" FOREIGN KEY ("paintwork_inspection_id") REFERENCES "paintwork_inspections"("paintwork_inspection_id") ON DELETE CASCADE ON UPDATE CASCADE;
