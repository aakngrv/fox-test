import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.dashboard.upsert({
    where: { dashboardId: 1 },
    update: {},
    create: {
      checkEngine: true,
      oilPressure: true,
      airbag: false,
      mileageOnDashboard: "5774",
      mileageInTheEngineBlock: '987',
      mileageInTheGearbox: "8494",
      mileageInAdditionalBlocks: "54343",
      comment: "zabis"
    }
  });
  await prisma.dashboard.upsert({
    where: { dashboardId: 2 },
    update: {},
    create: {
      checkEngine: true,
      oilPressure: true,
      airbag: false,
      mileageOnDashboard: "543",
      mileageInTheEngineBlock: '676',
      mileageInTheGearbox: "1212",
      mileageInAdditionalBlocks: "456",
      comment: "gacno"
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
