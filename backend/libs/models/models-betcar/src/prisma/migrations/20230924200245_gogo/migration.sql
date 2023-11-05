/*
  Warnings:

  - You are about to drop the `tcp` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tcp";

-- CreateTable
CREATE TABLE "tcps" (
    "tcp_id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "availability_tcp" TEXT NOT NULL DEFAULT '',
    "chassis" TEXT NOT NULL DEFAULT '',
    "series" TEXT NOT NULL DEFAULT '',
    "number" TEXT NOT NULL DEFAULT '',
    "date_of_issue" TEXT NOT NULL DEFAULT '',
    "number_of_owners" TEXT NOT NULL DEFAULT '',
    "video" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL DEFAULT '',
    "file" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "tcps_pkey" PRIMARY KEY ("tcp_id")
);

-- AddForeignKey
ALTER TABLE "tcps" ADD CONSTRAINT "tcps_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;
