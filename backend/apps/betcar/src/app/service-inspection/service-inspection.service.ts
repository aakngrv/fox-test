import { CreateServiceInspectionDto} from "./dto/create-service-inspection.dto";
import { ServiceInspection } from '@backend/shared/shared-types';
import { ServiceInspectionRepository} from "./service-inspection.repository";
import { Injectable } from '@nestjs/common';
import { ServiceInspectionEntity} from "./service-inspection.entity";
import { UpdateServiceInspectionDto} from "./dto/update-service-inspection.dto";

@Injectable()
export class ServiceInspectionService {

  constructor(
    private readonly serviceInspectionRepository: ServiceInspectionRepository
  ) {}

  async createServiceInspection(dto: CreateServiceInspectionDto): Promise<ServiceInspection> {
    const serviceInspectionEntity = new ServiceInspectionEntity(dto);
    return this.serviceInspectionRepository.create(serviceInspectionEntity);
  }

  async deleteServiceInspection(id: number): Promise<void> {
    await this.serviceInspectionRepository.destroy(id);
  }

  async getServiceInspection(id: number): Promise<ServiceInspection> {
    return this.serviceInspectionRepository.findById(id);
  }

  async updateServiceInspection(id: number, dto: UpdateServiceInspectionDto): Promise<ServiceInspection> {
    return this.serviceInspectionRepository.update(id, new ServiceInspectionEntity(dto));
  }
}