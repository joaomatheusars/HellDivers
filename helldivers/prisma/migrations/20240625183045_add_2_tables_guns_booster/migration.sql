-- CreateTable
CREATE TABLE "Guns" (
    "id" TEXT NOT NULL,
    "gunImage" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Guns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booster" (
    "id" TEXT NOT NULL,
    "boosterImage" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Booster_pkey" PRIMARY KEY ("id")
);
