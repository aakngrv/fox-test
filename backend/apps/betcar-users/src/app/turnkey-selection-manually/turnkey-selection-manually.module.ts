import { Module } from '@nestjs/common';
import { TurnkeySelectionManuallyController } from './turnkey-selection-manually.controller';
import { TurnkeySelectionManuallyService } from './turnkey-selection-manually.service';
import { TurnkeySelectionManuallyRepository } from './turnkey-selection-manually.repository';


@Module({
  imports: [
  ],
  controllers: [TurnkeySelectionManuallyController],
  providers: [
    TurnkeySelectionManuallyService, 
    TurnkeySelectionManuallyRepository
  ],
  exports: []
})
export class TurnkeySelectionManuallyModule {}