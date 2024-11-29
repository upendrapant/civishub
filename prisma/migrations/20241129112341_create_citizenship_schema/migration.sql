-- CreateTable
CREATE TABLE "Citizenship" (
    "id" TEXT NOT NULL,
    "citizenshipNumber" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "birthPlaceAddress" TEXT NOT NULL,
    "permanentAddress" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "citizenshipType" TEXT NOT NULL,
    "issuedDistrict" TEXT NOT NULL,
    "issuedDate" TIMESTAMP(3) NOT NULL,
    "issuedPerson" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Citizenship_pkey" PRIMARY KEY ("id")
);
