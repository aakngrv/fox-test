import { Module } from '@nestjs/common';
import { BetcarUserController } from './betcar-user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BetcarUserModel, BetcarUserSchema } from './betcar-user.model';
import { BetcarUserRepository } from './betcar-user.repository';

@Module({
  controllers: [BetcarUserController],
  imports: [MongooseModule.forFeature([
    { name: BetcarUserModel.name, schema: BetcarUserSchema }
  ])],
  providers: [BetcarUserRepository],
  exports: [BetcarUserRepository]
})
export class BetcarUserModule {}
