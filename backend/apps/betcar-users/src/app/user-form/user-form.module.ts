import { Module } from '@nestjs/common';
import { UserFormController } from './user-form.controller';
import { UserFormService } from './user-form.service';
import { UserFormRepository } from './user-form.repository';


@Module({
  imports: [
  ],
  controllers: [UserFormController],
  providers: [
    UserFormService, 
    UserFormRepository
  ],
  exports: []
})
export class UserFormModule {}