/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable
CREATE TABLE `UniqueUser` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191),
    `last_name` VARCHAR(191),
    `email` VARCHAR(191) NOT NULL,
    `profile_pic` VARCHAR(191),
    `username` VARCHAR(191),
    `password` VARCHAR(191),
UNIQUE INDEX `user.email_unique`(`email`),
UNIQUE INDEX `email`(`email`, `username`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- DropTable
DROP TABLE `User`;
