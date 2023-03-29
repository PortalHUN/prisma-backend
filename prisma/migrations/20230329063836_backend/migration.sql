/*
  Warnings:

  - You are about to drop the `_gametouser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `game` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_gametouser` DROP FOREIGN KEY `_GameToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_gametouser` DROP FOREIGN KEY `_GameToUser_B_fkey`;

-- DropTable
DROP TABLE `_gametouser`;

-- DropTable
DROP TABLE `game`;
