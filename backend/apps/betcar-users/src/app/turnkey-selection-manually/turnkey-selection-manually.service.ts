import { Injectable } from '@nestjs/common';
import { TurnkeySelectionManuallyRepository } from './turnkey-selection-manually.repository';
import { CreateTurnkeySelectionManuallyDto } from './dto/create-turnkey-selection-manually.dto';
import { TurnkeySelectionManually } from '@backend/shared/shared-types';
import { TurnkeySelectionManuallyEntity } from './turnkey-selection-manually.entity';


@Injectable()
export class TurnkeySelectionManuallyService {
  constructor(
    private readonly turnkeySelectionManuallyRepository: TurnkeySelectionManuallyRepository,
  ) {}

  async createTurnkeyManually(dto: CreateTurnkeySelectionManuallyDto): Promise<TurnkeySelectionManually> {

    const turnkeyManuallyEntity = new TurnkeySelectionManuallyEntity({ 
      ...dto, 
    });
    
    return this.turnkeySelectionManuallyRepository.create(turnkeyManuallyEntity);
  }

  async deleteTurnkeyManually(id: number): Promise<void> {
    await this.turnkeySelectionManuallyRepository.destroy(id);
  }

  async getTurnkeyManually(id: number): Promise<TurnkeySelectionManually> {
    return this.turnkeySelectionManuallyRepository.findById(id);
  }

  async getTurnkeysManually(): Promise<TurnkeySelectionManually[]> {
    return this.turnkeySelectionManuallyRepository.find();
  }

  async updateTurnkeyManually(id: number, dto: CreateTurnkeySelectionManuallyDto): Promise<TurnkeySelectionManually> {
    const turnkeyManuallyEntity = new TurnkeySelectionManuallyEntity({ 
      ...dto, 
    });
    return this.turnkeySelectionManuallyRepository.update(id, turnkeyManuallyEntity);
  }
}