export interface Token {
  refreshTokenId?: number;
  tokenId: number;
  createdAt: Date;
  userId: number;
  expiresIn: Date;
}