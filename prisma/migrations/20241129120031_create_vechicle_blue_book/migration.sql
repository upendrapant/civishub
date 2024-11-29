-- CreateTable
CREATE TABLE "VehicleBluebook" (
    "id" TEXT NOT NULL,
    "vehicleNumberPlate" TEXT NOT NULL,
    "vehicleType" TEXT NOT NULL,
    "vehicleRegisteredDate" TIMESTAMP(3) NOT NULL,
    "vehicleOwnerName" TEXT NOT NULL,
    "ownerAddress" TEXT NOT NULL,
    "vehicleCompanyName" TEXT NOT NULL,
    "vehicleModel" TEXT NOT NULL,
    "manufacturedYear" INTEGER NOT NULL,
    "numberOfCylinders" INTEGER NOT NULL,
    "vehicleHertzPower" DOUBLE PRECISION,
    "chassisNumber" TEXT NOT NULL,
    "engineNumber" TEXT NOT NULL,
    "vehicleColor" TEXT NOT NULL,
    "numberSeatCapacity" INTEGER NOT NULL,
    "fuelType" TEXT NOT NULL,
    "renewedDate" TIMESTAMP(3) NOT NULL,
    "dateToBeRenewed" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VehicleBluebook_pkey" PRIMARY KEY ("id")
);
