import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH',
    credentials: true
  });

  const config = new DocumentBuilder()
  .setTitle('The «Betcar uploader» service')
  .setDescription('Betcar uploader service API')
  .setVersion('1.0')
  .build();

  const globalPrefix = '';
  app.setGlobalPrefix(globalPrefix);

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 6000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
