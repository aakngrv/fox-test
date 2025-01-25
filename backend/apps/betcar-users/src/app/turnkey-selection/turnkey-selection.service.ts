import { Injectable } from '@nestjs/common';
import { TurnkeySelectionRepository } from './turnkey-selection.repository';
import { CreateTurnkeySelectionDto } from './dto/create-turnkey-selection.dto';
import { TurnkeySelection } from '@backend/shared/shared-types';
import { TurnkeySelectionEntity } from './turnkey-selection.entity';


@Injectable()
export class TurnkeySelectionService {
  constructor(
    private readonly turnkeySelectionRepository: TurnkeySelectionRepository,
  ) {}

  async createTurnkey(dto: CreateTurnkeySelectionDto): Promise<TurnkeySelection> {

    const turnkeyEntity = new TurnkeySelectionEntity({ 
      ...dto, 
    });
    
    return this.turnkeySelectionRepository.create(turnkeyEntity);
  }

  async deleteTurnkey(id: number): Promise<void> {
    await this.turnkeySelectionRepository.destroy(id);
  }

  async getTurnkey(id: number): Promise<TurnkeySelection> {
    return this.turnkeySelectionRepository.findById(id);
  }

  async getTurnkeys(): Promise<TurnkeySelection[]> {
    return this.turnkeySelectionRepository.find();
  }

  async updateTurnkey(id: number, dto: CreateTurnkeySelectionDto): Promise<TurnkeySelection> {
    const turnkeyEntity = new TurnkeySelectionEntity({ 
      ...dto, 
    });
    return this.turnkeySelectionRepository.update(id, turnkeyEntity);
  }
}