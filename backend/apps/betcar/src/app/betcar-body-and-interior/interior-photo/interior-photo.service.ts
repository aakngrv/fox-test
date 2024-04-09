import { CreateInteriorPhotoDto} from "./dto/create-interior-photo.dto";
import { InteriorPhoto } from '@backend/shared/shared-types';
import { InteriorPhotoRepository } from "./interior-photo.repository";
import { Injectable } from '@nestjs/common';
import { InteriorPhotoEntity } from "./interior-photo.entity";
import { UpdateInteriorPhotoDto } from "./dto/update-interior-photo.dto";

// import { AddElementDiscRepository } from './add-element-disc/add-element-disc.repository';

@Injectable()
export class InteriorPhotoService {

  constructor(
    private readonly interiorPhotoRepository: InteriorPhotoRepository,
    // private readonly addElementDiscRepository: AddElementDiscRepository
  ) {}

  async createInteriorPhoto(dto: CreateInteriorPhotoDto): Promise<InteriorPhoto> {
    // const addElementDisc = await this.addElementDiscRepository.find(dto.addElementDisc);
    const interiorPhotoEntity = new InteriorPhotoEntity({
      ...dto,
      // addElementDisc,
    });
    return this.interiorPhotoRepository.create(interiorPhotoEntity);
  }

  async deleteInteriorPhoto(id: number): Promise<void> {
    await this.interiorPhotoRepository.destroy(id);
  }

  async getInteriorPhoto(id: number): Promise<InteriorPhoto> {
    return this.interiorPhotoRepository.findById(id);
  }

  async updateInteriorPhoto(id: number, dto: UpdateInteriorPhotoDto): Promise<InteriorPhoto> {
    // const addElementDisc = await this.addElementDiscRepository.find(dto.addElementDisc);
    return this.interiorPhotoRepository.update(id, new InteriorPhotoEntity({
      ...dto,
      // addElementDisc,
    }));
  }
}