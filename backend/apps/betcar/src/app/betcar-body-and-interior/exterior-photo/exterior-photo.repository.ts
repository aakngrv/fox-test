import { ExteriorPhotoEntity} from "./exterior-photo.entity";
import { ExteriorPhoto } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ExteriorPhotoRepository implements CRUDRepository<ExteriorPhotoEntity, number, ExteriorPhoto> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ExteriorPhotoEntity): Promise<ExteriorPhoto> {
    const entityData = item.toObject();
    return this.prisma.exteriorPhoto.create({
      data: {
        ...entityData,
        // addElementDisc: {
        //   connect: []
        // },
      },
      // include: {
      //   addElementDisc: true,
      // }
    });
  }

  public async destroy(exteriorPhotoId: number): Promise<void> {
    await this.prisma.exteriorPhoto.delete({
      where: {
        exteriorPhotoId,
      }
    });
  }

  public findById(exteriorPhotoId: number): Promise<ExteriorPhoto | null> {
    return this.prisma.exteriorPhoto.findFirst({
      where: {
        exteriorPhotoId
      },
      // include: {
      //   addElementDisc: true,
      // }
    });
  }

  public find(ids: number[] = []): Promise<ExteriorPhoto[]> {
    return this.prisma.exteriorPhoto.findMany({
      where: {
        exteriorPhotoId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      // include: {
      //   addElementDisc: true,
      // }
    });
  }

  public update(exteriorPhotoId: number, item: ExteriorPhotoEntity): Promise<ExteriorPhoto> {
    return this.prisma.exteriorPhoto.update({
      where: {
        exteriorPhotoId
      },
      data: {
        ...item.toObject(),
        exteriorPhotoId,
        // addElementDisc: {
        //   connect: []
        // },
      },
      // include: {
      //   addElementDisc: true,
      // }
    });
  }
}