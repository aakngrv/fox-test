import { STSController} from "./sts.controller";
import { STSService} from "./sts.service";
import { STSRepository} from "./sts.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [STSController],
  providers: [STSService, STSRepository],
  exports: [STSRepository]
})
export class STSModule {}