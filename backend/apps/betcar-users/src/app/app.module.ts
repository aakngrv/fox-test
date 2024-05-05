import { Module } from '@nestjs/common';
import { BetcarUserModule } from './betcar-user/betcar-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigUsersModule } from '@backend/config/config-users';


@Module({
  imports: [
    BetcarUserModule, 
    AuthenticationModule,
    PrismaModule,
    ConfigUsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
