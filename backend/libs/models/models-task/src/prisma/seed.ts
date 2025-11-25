import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.user.upsert({
    where: { userId: 0},
    update: {},
    create: {
      author: true,
      executor: false,
      name: 'Вася',
      passwordHash: 'skjf923jfeisjidjf',
      email: 'mail@mail.ru',
      createdAt: new Date()
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
