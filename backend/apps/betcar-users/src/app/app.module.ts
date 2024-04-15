import { Module } from '@nestjs/common';
import { BetcarUserModule } from './betcar-user/betcar-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PrismaModule } from "./prisma/prisma.module";


@Module({
  imports: [
    BetcarUserModule, 
    AuthenticationModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
