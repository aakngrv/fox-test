import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.dashboard.upsert({
    where: { dashboardId: 1 },
    update: {},
    create: {
          dashboardId: 0,
          reportId: 0,
          abs: true,
          airbag: true,
          checkEngine: true,
          battery: true,
          tirePressure: true,
          oilPressure: true,
          controlLightComment: "5774",
          electronicDiagnostics: true,
          diagnosticsResult: "5774",
          diagnosticsFile: "5774",
          mileageOnDashboard: "5774",
          mileageInTheEngineBlock: "5774",
          mileageInTheGearbox: "5774",
          mileageInAdditionalBlocks: "5774",
          isNoMileage: true,
          totalComment: "5774",
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
