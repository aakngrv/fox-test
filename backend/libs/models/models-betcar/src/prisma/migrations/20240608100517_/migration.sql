-- AlterTable
ALTER TABLE "tcps" ADD COLUMN     "number_of_owners" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "tests_drive" ADD COLUMN     "electric_mirrors" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "add_paintworkd_elements" (
    "add_element_paintwork_id" SERIAL NOT NULL,
    "paintwork_inspection_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "info" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "add_paintworkd_elements_pkey" PRIMARY KEY ("add_element_paintwork_id")
);

-- AddForeignKey
ALTER TABLE "add_paintworkd_elements" ADD CONSTRAINT "add_paintworkd_elements_paintwork_inspection_id_fkey" FOREIGN KEY ("paintwork_inspection_id") REFERENCES "paintwork_inspections"("paintwork_inspection_id") ON DELETE CASCADE ON UPDATE CASCADE;
