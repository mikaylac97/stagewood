/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[email,username]` on the table `User`. If there are existing duplicate values, the migration will fail.

*/
-- DropIndex
DROP INDEX `User.email_unique` ON `User`;

-- CreateIndex
CREATE UNIQUE INDEX `User.email_username_unique` ON `User`(`email`, `username`);
