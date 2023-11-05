import { LocationEntity } from './location.entity';
import { Location } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LocationRepository implements CRUDRepository<LocationEntity, number, Location> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: LocationEntity): Promise<Location> {
    return this.prisma.location.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(locationId: number): Promise<void> {
    await this.prisma.location.delete({
      where: {
        locationId,
      }
    });
  }

  public findById(locationId: number): Promise<Location | null> {
    return this.prisma.location.findFirst({
      where: {
        locationId
      }
    });
  }

  public find(ids: number[] = []): Promise<Location[]> {
    return this.prisma.location.findMany({
      where: {
        locationId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(locationId: number, item: LocationEntity): Promise<Location> {
    return this.prisma.location.update({
      where: {
        locationId
      },
      data: { ...item.toObject(), locationId}
    });
  }
}