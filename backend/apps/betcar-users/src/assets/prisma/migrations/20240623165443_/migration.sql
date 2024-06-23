/*
  Warnings:

  - You are about to drop the `add_element_stop` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_element_stop" DROP CONSTRAINT "add_element_stop_stoppedEngineId_fkey";

-- AlterTable
ALTER TABLE "stopped_engines" ADD COLUMN     "is_fogging" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "add_element_stop";

-- CreateTable
CREATE TABLE "add_elements_stop" (
    "add_element_stop_id" SERIAL NOT NULL,
    "stoppedEngineId" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "fogging" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "photo" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "add_elements_stop_pkey" PRIMARY KEY ("add_element_stop_id")
);

-- AddForeignKey
ALTER TABLE "add_elements_stop" ADD CONSTRAINT "add_elements_stop_stoppedEngineId_fkey" FOREIGN KEY ("stoppedEngineId") REFERENCES "stopped_engines"("stopped_engine_id") ON DELETE CASCADE ON UPDATE CASCADE;
