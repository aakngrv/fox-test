Для запуска бэка:

1. Перейти в директорию backend;
2. Выполнить npm i;
3. Запустить Docker контейнеры;

4. Команды для БД:
- nx run fox-task:db:generate
- nx run fox-task:db:migrate
- nx run fox-task:db:seed
- nx run fox-task:db:reset

5. Запуск сервисов:
- nx run fox-users:serve
- nx run fox-task:serve

Для запуска фронта:

1. Перейти в директорию frontend;
2. Выполнить npm i;
3. Выполнить npm run dev;

.env файлы из .gitignore я убрал, чтобы проще было запустить проект.

Swagger доступен по адресам:

- http://localhost:3000/api
- http://localhost:4000/api


