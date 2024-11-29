-- CreateTable
CREATE TABLE "MedicalReport" (
    "id" TEXT NOT NULL,
    "gender" TEXT,
    "location" TEXT,
    "dob" TIMESTAMP(3),
    "nationality" TEXT,
    "age" INTEGER,
    "admissionDt" TIMESTAMP(3),
    "doctor" TEXT,
    "diseases" TEXT,
    "diagnosis" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalReport_pkey" PRIMARY KEY ("id")
);
