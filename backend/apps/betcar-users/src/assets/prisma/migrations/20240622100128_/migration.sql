/*
  Warnings:

  - You are about to drop the column `fogging` on the `stopped_engines` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `stopped_engines` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "stopped_engines" DROP COLUMN "fogging",
DROP COLUMN "photo";

-- CreateTable
CREATE TABLE "add_element_stop" (
    "add_element_stop_id" SERIAL NOT NULL,
    "stoppedEngineId" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "fogging" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "photo" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "add_element_stop_pkey" PRIMARY KEY ("add_element_stop_id")
);

-- AddForeignKey
ALTER TABLE "add_element_stop" ADD CONSTRAINT "add_element_stop_stoppedEngineId_fkey" FOREIGN KEY ("stoppedEngineId") REFERENCES "stopped_engines"("stopped_engine_id") ON DELETE CASCADE ON UPDATE CASCADE;
