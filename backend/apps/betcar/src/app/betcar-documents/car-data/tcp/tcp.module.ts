import { TCPController} from "./tcp.controller";
import { TCPService} from "./tcp.service";
import { TCPRepository} from "./tcp.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [TCPController],
  providers: [TCPService, TCPRepository],
  exports: [TCPRepository]
})
export class TCPModule {}