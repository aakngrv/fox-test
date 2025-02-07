import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { TurnkeySelectionManuallyEntity } from './turnkey-selection-manually.entity';
import { TurnkeySelectionManually } from '@backend/shared/shared-types';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class TurnkeySelectionManuallyRepository implements CRUDRepository<TurnkeySelectionManuallyEntity, number, TurnkeySelectionManually> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: TurnkeySelectionManuallyEntity): Promise<TurnkeySelectionManually> {
    const entityData = item.toObject();
    return this.prisma.turnkeySelectionManually.create({
      data: {
        ...entityData,
      }
    });
  }

  public async destroy(turnkeySelectionManuallyId: number): Promise<void> {
    await this.prisma.turnkeySelectionManually.delete({
      where: {
        turnkeySelectionManuallyId,
      }
    });
  }

  public async findById(turnkeySelectionManuallyId: number): Promise<TurnkeySelectionManually | null> {
    return this.prisma.turnkeySelectionManually.findFirst({
      where: {
        turnkeySelectionManuallyId
      }
    });
  }

  public find(): Promise<TurnkeySelectionManually[]> {
    return this.prisma.turnkeySelectionManually.findMany({});
  }

  public update(turnkeySelectionManuallyId: number, item: TurnkeySelectionManuallyEntity): Promise<TurnkeySelectionManually> {
    const entityData = item.toObject();
    return this.prisma.turnkeySelectionManually.update({
      where: {
        turnkeySelectionManuallyId
      },
        data: {
          ...entityData,
        }
    });
  }
}