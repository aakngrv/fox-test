import { VinBodyNumberController} from "./vin-body-number.controller";
import { VinBodyNumberService} from "./vin-body-number.service";
import { VinBodyNumberRepository} from "./vin-body-number.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [VinBodyNumberController],
  providers: [VinBodyNumberService, VinBodyNumberRepository],
  exports: [VinBodyNumberRepository]
})
export class VinBodyNumberModule {}