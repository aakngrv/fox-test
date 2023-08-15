import { Module } from '@nestjs/common';
import { BetcarUserController } from './betcar-user.controller';
import { BetcarUserService } from './betcar-user.service';
import { BetcarUserMemoryRepository } from "./betcar-user-memory.repository";

@Module({
  controllers: [BetcarUserController],
  providers: [BetcarUserService, BetcarUserMemoryRepository],
  exports: [BetcarUserMemoryRepository]
})
export class BetcarUserModule {}
