import { CRUDRepository } from '@backend/util/util-types';
import { Injectable } from '@nestjs/common';
import { BetcarUserEntity } from "./betcar-user.entity";
import { User } from '@backend/shared/shared-types';
import { BetcarUserModel } from './betcar-user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BetcarUserRepository implements CRUDRepository<BetcarUserEntity, string, User> {
  constructor(
    @InjectModel(BetcarUserModel.name) private readonly betcarUserModel: Model<BetcarUserModel>) {
  }

  public async create(item: BetcarUserEntity): Promise<User> {
    const newBetcarUser = new this.betcarUserModel(item);
    return newBetcarUser.save();
  }

  public async destroy(id: string): Promise<void> {
    await this.betcarUserModel.deleteOne({_id: id}).exec();
  }

  public async findById(id: string): Promise<User | null> {
    return this.betcarUserModel
      .findOne({_id: id})
      .exec();
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.betcarUserModel
      .findOne({email})
      .exec();
  }

  public async update(id: string, item: BetcarUserEntity): Promise<User> {
    return this.betcarUserModel
      .findByIdAndUpdate(id, item.toObject(), {new: true})
      .exec();
  }
}
