import { Module } from '@nestjs/common';
import { BetcarUserModule } from './betcar-user/betcar-user.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [BetcarUserModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
