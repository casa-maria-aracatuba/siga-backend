-- CreateTable
CREATE TABLE "AssistedPeople" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "childrenCount" INTEGER NOT NULL,
    "familyIncome" DOUBLE PRECISION NOT NULL,
    "educationLevel" TEXT NOT NULL,
    "employmentStatus" TEXT NOT NULL,
    "housingType" TEXT NOT NULL,
    "documentHash" TEXT NOT NULL,
    "photoHash" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "AssistedPeople_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupportHistories" (
    "id" SERIAL NOT NULL,
    "assistedPeopleId" INTEGER NOT NULL,
    "partnershipId" INTEGER NOT NULL,
    "caseRecordId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "documentHash" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "referralDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "supportDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupportHistories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partnerships" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "partnershipType" TEXT NOT NULL,

    CONSTRAINT "Partnerships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseRecords" (
    "id" SERIAL NOT NULL,
    "occurrenceDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "aggressorType" TEXT NOT NULL,
    "violenceType" TEXT NOT NULL,
    "femicideRisk" BOOLEAN NOT NULL,
    "riskSigns" TEXT NOT NULL,
    "protocolNumber" TEXT NOT NULL,
    "agencyId" INTEGER NOT NULL,
    "assistedPeopleId" INTEGER NOT NULL,

    CONSTRAINT "CaseRecords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agencies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Agencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnershipHistories" (
    "id" SERIAL NOT NULL,
    "partnershipId" INTEGER NOT NULL,
    "actionDate" TIMESTAMP(3) NOT NULL,
    "actions" TEXT NOT NULL,
    "results" TEXT NOT NULL,

    CONSTRAINT "PartnershipHistories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "responsibleName" TEXT NOT NULL,

    CONSTRAINT "Donors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonationTypes" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "DonationTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialDonations" (
    "id" SERIAL NOT NULL,
    "donorId" INTEGER NOT NULL,
    "donationTypeId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "receiptDate" TIMESTAMP(3) NOT NULL,
    "donationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinancialDonations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductDonations" (
    "id" SERIAL NOT NULL,
    "donorId" INTEGER NOT NULL,
    "donationTypeId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "receiptDate" TIMESTAMP(3) NOT NULL,
    "assistedPeopleId" INTEGER NOT NULL,
    "donationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductDonations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SupportHistories" ADD CONSTRAINT "SupportHistories_assistedPeopleId_fkey" FOREIGN KEY ("assistedPeopleId") REFERENCES "AssistedPeople"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportHistories" ADD CONSTRAINT "SupportHistories_partnershipId_fkey" FOREIGN KEY ("partnershipId") REFERENCES "Partnerships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportHistories" ADD CONSTRAINT "SupportHistories_caseRecordId_fkey" FOREIGN KEY ("caseRecordId") REFERENCES "CaseRecords"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseRecords" ADD CONSTRAINT "CaseRecords_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseRecords" ADD CONSTRAINT "CaseRecords_assistedPeopleId_fkey" FOREIGN KEY ("assistedPeopleId") REFERENCES "AssistedPeople"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnershipHistories" ADD CONSTRAINT "PartnershipHistories_partnershipId_fkey" FOREIGN KEY ("partnershipId") REFERENCES "Partnerships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialDonations" ADD CONSTRAINT "FinancialDonations_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialDonations" ADD CONSTRAINT "FinancialDonations_donationTypeId_fkey" FOREIGN KEY ("donationTypeId") REFERENCES "DonationTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDonations" ADD CONSTRAINT "ProductDonations_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDonations" ADD CONSTRAINT "ProductDonations_donationTypeId_fkey" FOREIGN KEY ("donationTypeId") REFERENCES "DonationTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDonations" ADD CONSTRAINT "ProductDonations_assistedPeopleId_fkey" FOREIGN KEY ("assistedPeopleId") REFERENCES "AssistedPeople"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
