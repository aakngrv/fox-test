import { InteriorPhotoEntity} from "./interior-photo.entity";
import { InteriorPhoto } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class InteriorPhotoRepository implements CRUDRepository<InteriorPhotoEntity, number, InteriorPhoto> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: InteriorPhotoEntity): Promise<InteriorPhoto> {
    const entityData = item.toObject();
    return this.prisma.interiorPhoto.create({
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

  public async destroy(interiorPhotoId: number): Promise<void> {
    await this.prisma.interiorPhoto.delete({
      where: {
        interiorPhotoId,
      }
    });
  }

  public findById(interiorPhotoId: number): Promise<InteriorPhoto | null> {
    return this.prisma.interiorPhoto.findFirst({
      where: {
        interiorPhotoId
      },
      // include: {
      //   addElementDisc: true,
      // }
    });
  }

  public find(ids: number[] = []): Promise<InteriorPhoto[]> {
    return this.prisma.interiorPhoto.findMany({
      where: {
        interiorPhotoId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      // include: {
      //   addElementDisc: true,
      // }
    });
  }

  public update(interiorPhotoId: number, item: InteriorPhotoEntity): Promise<InteriorPhoto> {
    return this.prisma.interiorPhoto.update({
      where: {
        interiorPhotoId
      },
      data: {
        ...item.toObject(),
        interiorPhotoId,
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