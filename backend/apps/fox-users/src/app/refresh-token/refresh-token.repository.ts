import { RefreshTokenEntity } from './refresh-token.entity';
import { Token} from '@backend/shared/shared-types';
import { PrismaService } from "../prisma/prisma.service";
import { CRUDRepository } from "@backend/util/util-types";


  export class RefreshTokenRepository {
  
    constructor(private readonly prisma: PrismaService) {}

  public async create(item: RefreshTokenEntity): Promise<Token> {
    return this.prisma.refreshToken.create({
      data: { ...item.toObject() }
    });
  }

    public async destroy(refreshTokenId: number) {
      await this.prisma.refreshToken.delete({
        where: {
          refreshTokenId,
        }
      });
    }

    public findById(refreshTokenId: number): Promise<Token | null> {
      return this.prisma.refreshToken.findFirst({
        where: {
          refreshTokenId
        }
      });
    }

  // public async deleteExpiredTokens() {
  //   return this.refreshToken.deleteMany(
  //       { 
  //         expiresIn: { $lt: new Date()}
  //       })
  // }
}