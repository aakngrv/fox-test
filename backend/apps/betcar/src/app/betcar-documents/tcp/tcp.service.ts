import { CreateTcpDto } from './dto/create-tcp.dto';
import { TCP } from '@backend/shared/shared-types';
import { TcpRepository } from './tcp.repository';
import { Injectable } from '@nestjs/common';
import { TcpEntity } from './tcp.entity';
import { UpdateTcpDto } from './dto/update-tcp.dto';

@Injectable()
export class TcpService {

  constructor(
    private readonly tcpRepository: TcpRepository
  ) {}

  async createTcp(dto: CreateTcpDto): Promise<TCP> {
    const tcpEntity = new TcpEntity(dto);
    return this.tcpRepository.create(tcpEntity);
  }

  async deleteTcp(id: number): Promise<void> {
    await this.tcpRepository.destroy(id);
  }

  async getTcp(id: number): Promise<TCP> {
    return this.tcpRepository.findById(id);
  }

  async updateTcp(id: number, dto: UpdateTcpDto): Promise<TCP> {
    return this.tcpRepository.update(id, new TcpEntity(dto));
  }
}