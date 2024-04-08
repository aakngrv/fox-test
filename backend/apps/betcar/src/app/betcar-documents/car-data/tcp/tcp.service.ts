import { CreateTCPDto} from "./dto/create-tcp.dto";
import { TCP } from '@backend/shared/shared-types';
import { TCPRepository} from "./tcp.repository";
import { Injectable } from '@nestjs/common';
import { TCPEntity} from "./tcp.entity";
import { UpdateTCPDto} from "./dto/update-tcp.dto";

@Injectable()
export class TCPService {

  constructor(
    private readonly tCPRepository: TCPRepository
  ) {}

  async createTCP(dto: CreateTCPDto): Promise<TCP> {
    const tCPEntity = new TCPEntity(dto);
    return this.tCPRepository.create(tCPEntity);
  }

  async deleteTCP(id: number): Promise<void> {
    await this.tCPRepository.destroy(id);
  }

  async getTCP(id: number): Promise<TCP> {
    return this.tCPRepository.findById(id);
  }

  async updateTCP(id: number, dto: UpdateTCPDto): Promise<TCP> {
    return this.tCPRepository.update(id, new TCPEntity(dto));
  }
}