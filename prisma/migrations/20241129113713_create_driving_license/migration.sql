-- CreateTable
CREATE TABLE "DrivingLicense" (
    "id" TEXT NOT NULL,
    "dlNumber" TEXT NOT NULL,
    "bloodGroup" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "licenseOffice" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "fatherName" TEXT NOT NULL,
    "citizenshipNumber" TEXT,
    "licenseCategory" TEXT NOT NULL,
    "passportNumber" TEXT,
    "contactNumber" TEXT NOT NULL,
    "licenseDateOfIssue" TIMESTAMP(3) NOT NULL,
    "licenseDateOfExpiry" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DrivingLicense_pkey" PRIMARY KEY ("id")
);
