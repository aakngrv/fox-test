import { CreateLocationDto } from './dto/create-location.dto';
import { Location } from '@backend/shared/shared-types';
import { LocationRepository } from './location.repository';
import { Injectable } from '@nestjs/common';
import { LocationEntity } from './location.entity';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {

  constructor(
    private readonly locationRepository: LocationRepository
  ) {}

  async createLocation(dto: CreateLocationDto): Promise<Location> {
    const locationEntity = new LocationEntity(dto);
    return this.locationRepository.create(locationEntity);
  }

  async deleteLocation(id: number): Promise<void> {
    await this.locationRepository.destroy(id);
  }

  async getLocation(id: number): Promise<Location> {
    return this.locationRepository.findById(id);
  }

  async updateLocation(id: number, dto: UpdateLocationDto): Promise<Location> {
    return this.locationRepository.update(id, new LocationEntity(dto));
  }
}