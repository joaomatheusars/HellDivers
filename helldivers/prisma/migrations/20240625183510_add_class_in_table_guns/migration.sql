/*
  Warnings:

  - Added the required column `class` to the `Guns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Guns" ADD COLUMN     "class" TEXT NOT NULL;
