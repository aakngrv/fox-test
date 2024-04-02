import { CreateExteriorPhotoDto} from "./dto/create-exterior-photo.dto";
import { ExteriorPhoto } from '@backend/shared/shared-types';
import { ExteriorPhotoRepository} from "./exterior-photo.repository";
import { Injectable } from '@nestjs/common';
import { ExteriorPhotoEntity} from "./exterior-photo.entity";
import { UpdateExteriorPhotoDto} from "./dto/update-exterior-photo.dto";
// import { AddElementDiscRepository } from './add-element-disc/add-element-disc.repository';

@Injectable()
export class ExteriorPhotoService {

  constructor(
    private readonly exteriorPhotoRepository: ExteriorPhotoRepository,
    // private readonly addElementDiscRepository: AddElementDiscRepository
  ) {}

  async createExteriorPhoto(dto: CreateExteriorPhotoDto): Promise<ExteriorPhoto> {
    // const addElementDisc = await this.addElementDiscRepository.find(dto.addElementDisc);
    const exteriorPhotoEntity = new ExteriorPhotoEntity({
      ...dto,
      // addElementDisc,
    });
    return this.exteriorPhotoRepository.create(exteriorPhotoEntity);
  }

  async deleteExteriorPhoto(id: number): Promise<void> {
    await this.exteriorPhotoRepository.destroy(id);
  }

  async getExteriorPhoto(id: number): Promise<ExteriorPhoto> {
    return this.exteriorPhotoRepository.findById(id);
  }

  async updateExteriorPhoto(id: number, dto: UpdateExteriorPhotoDto): Promise<ExteriorPhoto> {
    // const addElementDisc = await this.addElementDiscRepository.find(dto.addElementDisc);
    return this.exteriorPhotoRepository.update(id, new ExteriorPhotoEntity({
      ...dto,
      // addElementDisc,
    }));
  }
}