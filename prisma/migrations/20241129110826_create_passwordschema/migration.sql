-- CreateTable
CREATE TABLE "Passport" (
    "id" TEXT NOT NULL,
    "passportNumber" TEXT NOT NULL,
    "passportType" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "givenName" TEXT NOT NULL,
    "surName" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "citizenshipNumber" TEXT,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "dateOfIssue" TIMESTAMP(3) NOT NULL,
    "dateOfExpiry" TIMESTAMP(3) NOT NULL,
    "issuingAuthority" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Passport_pkey" PRIMARY KEY ("id")
);
