import { CRUDRepository } from '@backend/util/util-types';
import { UserEntity } from './user.entity';
import { User } from '@backend/shared/shared-types';
import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UserRepository implements CRUDRepository<UserEntity, number, User> {
  
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: UserEntity): Promise<User> {
    const entityData = item.toObject();
    return this.prisma.user.create({
      data: { 
        ...entityData,
      }
    });
  }

  public async destroy(userId: number): Promise<void> {
    await this.prisma.user.delete({
      where: {
        userId,
      }
    });
  }

  public async findById(userId: number): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        userId
      }
    });
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        email
      }
    });
  }

  public find(ids: number[] = []): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        userId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(userId: number, item: UserEntity): Promise<User> {
    return this.prisma.user.update({
      where: {
        userId
      },
      data: { 
        ...item.toObject(), 
        userId 
      },
    });
  }
}