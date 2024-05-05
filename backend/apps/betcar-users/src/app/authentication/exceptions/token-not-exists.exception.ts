import { UnauthorizedException } from '@nestjs/common';

export class TokenNotExistsException extends UnauthorizedException {
  constructor(tokenId: number) {
    super(`Token with ID ${tokenId} does not exists`);
  }
}