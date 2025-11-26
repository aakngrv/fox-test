import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.user.upsert({
    where: { userId: 0},
    update: {},
    create: {
      name: 'Вася',
      passwordHash: 'skjf923jfeisjidjf',
      email: 'mail@mail.ru',
      createdAt: new Date()
    }
  });

  await prisma.user.upsert({
    where: { userId: 1},
    update: {},
    create: {
      name: 'Дима',
      passwordHash: 'asdfasdfasdfe',
      email: 'e@mail.ru',
      createdAt: new Date()
    }
  });

  await prisma.user.upsert({
    where: { userId: 2},
    update: {},
    create: {
      name: 'Коля',
      passwordHash: 'asdfasdfasdfe',
      email: 'w@mail.ru',
      createdAt: new Date()
    }
  });

  await prisma.task.upsert({
    where: { taskId: 3},
    update: {},
    create: {
      title: 'Задача 5',
      description: 'Новая задача',
      author: 'w@mail.ru',
      executor: 'e@mail.ru',
      createdAt: new Date()
    }
  });

  await prisma.task.upsert({
    where: { taskId: 1},
    update: {},
    create: {
      title: 'Задача 3',
      description: 'Новая задача 444',
      author: 'e@mail.ru',
      executor: 'w@mail.ru',
      createdAt: new Date()
    }
  });

  await prisma.task.upsert({
    where: { taskId: 2},
    update: {},
    create: {
      title: 'Задача 84',
      description: 'Новая задача сложная',
      author: 'aakkn@mail.ru',
      executor: 'w@mail.ru',
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
