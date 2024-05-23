import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigService } from '@nestjs/config';
import { FileRepository } from './file.repository';

@Module({
  imports: [
    ServeStaticModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const rootPath = configService.get<string>('application.uploadDirectory');
        const serveRoot = configService.get<string>('application.serveRoot');
        return [{
          rootPath,
          serveRoot,
          serveStaticOptions: {
            fallthrough: true,
            etag: true,
          }
        }]
      }
    })
  ],
  providers: [
    FileService,
    FileRepository,
  ],
  controllers: [FileController]
})
export class FileModule {}