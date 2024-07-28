/*
  Warnings:

  - Added the required column `isSold` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "isSold" BOOLEAN NOT NULL;
