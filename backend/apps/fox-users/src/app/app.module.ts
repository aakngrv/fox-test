import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigUsersModule } from '@backend/config/config-users';



@Module({
  imports: [
    UserModule, 
    AuthenticationModule,
    PrismaModule,
    ConfigUsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
