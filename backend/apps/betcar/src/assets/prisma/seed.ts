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
      serviceInspectionCompressionCheck: ["rrr", "tttt"],
      serviceInspectionEndoscopeCheck: ["rrr", "tttt"],
      serviceInspectionEngineInspection: ["rrr", "tttt"],
      serviceInspectionCheckpointInspection: ["rrr", "tttt"],
      serviceInspectionPowerSteeringInspection: ["rrr", "tttt"],
      serviceInspectionTransferCaseInspection: ["rrr", "tttt"],
      serviceInspectionRearAxleInspection: ["rrr", "tttt"],
      serviceInspectionFrontAxleInspection: ["rrr", "tttt"],
      serviceInspectionSteeringRackInspection: ["rrr", "tttt"],
      serviceInspectionChassisInspection: ["rrr", "tttt"],
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
