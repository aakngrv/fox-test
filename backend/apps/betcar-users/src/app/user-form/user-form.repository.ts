import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { UserFormEntity } from './user-form.entity';
import { UserForm } from '@backend/shared/shared-types';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UserFormRepository implements CRUDRepository<UserFormEntity, number, UserForm> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: UserFormEntity): Promise<UserForm> {
    const entityData = item.toObject();
    return this.prisma.userProfile.create({
      data: {
        ...entityData,
      }
    });
  }

  public async destroy(userProfileId: number): Promise<void> {
    await this.prisma.userProfile.delete({
      where: {
        userProfileId,
      }
    });
  }

  public async findById(userProfileId: number): Promise<UserForm | null> {
    return this.prisma.userProfile.findFirst({
      where: {
        userProfileId
      }
    });
  }

  public find(): Promise<UserForm[]> {
    return this.prisma.userProfile.findMany({});
  }

  public update(userProfileId: number, item: UserFormEntity): Promise<UserForm> {
    const entityData = item.toObject();
    return this.prisma.userProfile.update({
      where: {
        userProfileId
      },
        data: {
          ...entityData,
        }
    });
  }
}