import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.report.upsert({
    where: { reportId: 1 },
    update: {},
    create: {
      reportId: 1,
      userId: 1,
      title: "string",
    }
  });
  await prisma.serviceInspection.upsert({
    where: { serviceInspectionId: 1 },
    update: {},
    create: {
      serviceInspectionId: 1,
      compressionCheck: ["rrr", "tttt"],
      endoscopeCheck: ["rrr", "tttt"],
      engineInspection: ["rrr", "tttt"],
      checkpointInspection: ["rrr", "tttt"],
      powerSteeringInspection: ["rrr", "tttt"],
      transferCaseInspection: ["rrr", "tttt"],
      rearAxleInspection: ["rrr", "tttt"],
      frontAxleInspection: ["rrr", "tttt"],
      steeringRackInspection: ["rrr", "tttt"],
      chassisInspection: ["rrr", "tttt"],
    }
  });
  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
