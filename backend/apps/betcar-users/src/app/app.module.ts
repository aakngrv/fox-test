import { Module } from '@nestjs/common';
import { BetcarUserModule } from './betcar-user/betcar-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigUsersModule } from '@backend/config/config-users';
import { PaymentModule } from './payment/payment.module';


@Module({
  imports: [
    BetcarUserModule, 
    AuthenticationModule,
    PrismaModule,
    ConfigUsersModule,
    PaymentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
