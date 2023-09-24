import { TcpEntity } from './tcp.entity';
import { TCP } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TcpRepository implements CRUDRepository<TcpEntity, number, TCP> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: TcpEntity): Promise<TCP> {
    return this.prisma.tCP.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(tcpId: number): Promise<void> {
    await this.prisma.tCP.delete({
      where: {
        tcpId,
      }
    });
  }

  public findById(tcpId: number): Promise<TCP | null> {
    return this.prisma.tCP.findFirst({
      where: {
        tcpId
      }
    });
  }

  public find(ids: number[] = []): Promise<TCP[]> {
    return this.prisma.tCP.findMany({
      where: {
        tcpId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(tcpId: number, item: TcpEntity): Promise<TCP> {
    return this.prisma.tCP.update({
      where: {
        tcpId
      },
      data: { ...item.toObject(), tcpId}
    });
  }
}