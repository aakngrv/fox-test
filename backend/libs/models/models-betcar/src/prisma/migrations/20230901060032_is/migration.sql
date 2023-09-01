/*
  Warnings:

  - You are about to drop the column `emergency` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `metallic` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `new_car` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `not_installed` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `not_on_track` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `absent` on the `sts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cars_datas" DROP COLUMN "emergency",
DROP COLUMN "metallic",
DROP COLUMN "new_car",
DROP COLUMN "not_installed",
DROP COLUMN "not_on_track",
ADD COLUMN     "is_emergency" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_metallic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_new_car" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_not_installed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_not_on_track" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "sts" DROP COLUMN "absent",
ADD COLUMN     "is_absent" BOOLEAN NOT NULL DEFAULT false;
