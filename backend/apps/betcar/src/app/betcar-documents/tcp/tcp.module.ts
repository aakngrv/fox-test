import { TcpController } from './tcp.controller';
import { TcpService } from './tcp.service';
import { TcpRepository } from './tcp.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [TcpController],
  providers: [TcpService, TcpRepository],
  exports: [TcpRepository]
})
export class TcpModule {}