import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User, UserRole } from '@backend/shared/shared-types';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class BetcarUserModel extends Document implements User {

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public firstname: string;

  @Prop({
    required: true,
  })
  public lastname: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
    default: UserRole.Executor,
  })
  public role: UserRole;

  @Prop({
    required: true,
  })
  phone: string;
}

export const BetcarUserSchema = SchemaFactory.createForClass(BetcarUserModel);
