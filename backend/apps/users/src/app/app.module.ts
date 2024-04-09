import { Module } from '@nestjs/common';
import { BetcarUserModule } from './betcar-user/betcar-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigUsersModule, getMongooseOptions } from '@backend/config/config-users';
import { MongooseModule } from '@nestjs/mongoose';
import { NotifyModule } from './notify/notify.module';

@Module({
  imports: [
    BetcarUserModule,
    AuthenticationModule,
    ConfigUsersModule,
    NotifyModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )],
  controllers: [],
  providers: [],
})
export class AppModule {}
