import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { TurnkeySelectionEntity } from './turnkey-selection.entity';
import { TurnkeySelection } from '@backend/shared/shared-types';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class TurnkeySelectionRepository implements CRUDRepository<TurnkeySelectionEntity, number, TurnkeySelection> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: TurnkeySelectionEntity): Promise<TurnkeySelection> {
    const entityData = item.toObject();
    return this.prisma.turnkeySelection.create({
      data: {
        ...entityData,
      }
    });
  }

  public async destroy(turnkeySelectionId: number): Promise<void> {
    await this.prisma.turnkeySelection.delete({
      where: {
        turnkeySelectionId,
      }
    });
  }

  public async findById(turnkeySelectionId: number): Promise<TurnkeySelection | null> {
    return this.prisma.turnkeySelection.findFirst({
      where: {
        turnkeySelectionId
      }
    });
  }

  public find(): Promise<TurnkeySelection[]> {
    return this.prisma.turnkeySelection.findMany({});
  }

  public update(turnkeySelectionId: number, item: TurnkeySelectionEntity): Promise<TurnkeySelection> {
    const entityData = item.toObject();
    return this.prisma.turnkeySelection.update({
      where: {
        turnkeySelectionId
      },
        data: {
          ...entityData,
        }
    });
  }
}