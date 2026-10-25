-- CreateEnum
CREATE TYPE "status" AS ENUM ('PENDENTE', 'CONCLUIDO', 'ATRASADO', 'REMARCADO');

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scheduling" (
    "id" TEXT NOT NULL,
    "Hour" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "status" NOT NULL DEFAULT 'PENDENTE',
    "service_id" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scheduling_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Scheduling" ADD CONSTRAINT "Scheduling_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
