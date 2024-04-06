import { ServiceInspectionController } from "./service-inspection.controller";
import { ServiceInspectionService } from "./service-inspection.service";
import { ServiceInspectionRepository } from "./service-inspection.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ServiceInspectionController],
  providers: [ServiceInspectionService, ServiceInspectionRepository],
  exports: [ServiceInspectionRepository]
})
export class ServiceInspectionModule {}