import { Module } from '@nestjs/common';
import { BetcarUserModule } from './betcar-user/betcar-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigUsersModule } from '@backend/config/config-users';
import { PaymentModule } from './payment/payment.module';
import { UserBidsModule } from './bids/bids.module';
import { OrgBidsModule } from './organization-bids/org-bids.module';
import { UserFormModule } from './user-form/user-form.module';
import { TurnkeySelectionModule } from './turnkey-selection/turnkey-selection.module';


@Module({
  imports: [
    BetcarUserModule, 
    AuthenticationModule,
    PrismaModule,
    ConfigUsersModule,
    PaymentModule,
    UserBidsModule,
    OrgBidsModule,
    UserFormModule,
    TurnkeySelectionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
