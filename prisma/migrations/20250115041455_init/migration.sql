/*
  Warnings:

  - You are about to drop the column `gitUrl` on the `experience` table. All the data in the column will be lost.
  - You are about to drop the `_experiencetags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tag` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_experiencetags` DROP FOREIGN KEY `_ExperienceTags_A_fkey`;

-- DropForeignKey
ALTER TABLE `_experiencetags` DROP FOREIGN KEY `_ExperienceTags_B_fkey`;

-- AlterTable
ALTER TABLE `experience` DROP COLUMN `gitUrl`,
    ADD COLUMN `tag` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_experiencetags`;

-- DropTable
DROP TABLE `tag`;
