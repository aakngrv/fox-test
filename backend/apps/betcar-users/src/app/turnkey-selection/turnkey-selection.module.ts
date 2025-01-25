import { Module } from '@nestjs/common';
import { TurnkeySelectionController } from './turnkey-selection.controller';
import { TurnkeySelectionService } from './turnkey-selection.service';
import { TurnkeySelectionRepository } from './turnkey-selection.repository';


@Module({
  imports: [
  ],
  controllers: [TurnkeySelectionController],
  providers: [
    TurnkeySelectionService, 
    TurnkeySelectionRepository
  ],
  exports: []
})
export class TurnkeySelectionModule {}