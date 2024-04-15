import { Module } from '@nestjs/common';
import { BetcarUserRepository } from "./betcar-user.repository";


@Module({
  imports: [],
  providers: [BetcarUserRepository],
  exports: [BetcarUserRepository]
})
export class BetcarUserModule {}
