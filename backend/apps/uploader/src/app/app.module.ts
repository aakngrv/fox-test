import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { ConfigUploaderModule } from '@backend/config/config-uploader';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    FileModule,
    ConfigUploaderModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
