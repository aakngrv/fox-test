import { TokenPayload } from './token-payload.interface';

export interface RefreshTokenPayload extends TokenPayload {
  tokenId: number;
}