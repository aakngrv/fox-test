/*
  Warnings:

  - You are about to drop the column `motorist_set` on the `complectation_others` table. All the data in the column will be lost.
  - You are about to drop the column `socket_12v` on the `complectation_others` table. All the data in the column will be lost.
  - You are about to drop the column `socket_220v` on the `complectation_others` table. All the data in the column will be lost.
  - The `diagnostics_file` column on the `dashboards` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "complectation_others" DROP COLUMN "motorist_set",
DROP COLUMN "socket_12v",
DROP COLUMN "socket_220v";

-- AlterTable
ALTER TABLE "dashboards" ADD COLUMN     "esp" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "diagnostics_file",
ADD COLUMN     "diagnostics_file" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "stopped_engines" ADD COLUMN     "fogging" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "photo" TEXT[] DEFAULT ARRAY['']::TEXT[];
