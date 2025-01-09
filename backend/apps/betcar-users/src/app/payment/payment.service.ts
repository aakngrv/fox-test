import { ConflictException, Injectable, NotFoundException, UnauthorizedException, Inject } from '@nestjs/common';
import { BetcarUserRepository } from '../betcar-user/betcar-user.repository';

import { BetcarUserEntity } from '../betcar-user/betcar-user.entity';
import { User, TokenPayload } from "@backend/shared/shared-types";



@Injectable()
export class PaymentService {
  constructor(
    private readonly betcarUserRepository: BetcarUserRepository,
  ) {}

    payload = {
    "id": "23d93cac-000f-5000-8000-126628f15141",
    "status": "pending",
    "paid": false,
    "amount": {
      "value": "100.00",
      "currency": "RUB"
    },
    "confirmation": {
      "type": "redirect",
      "confirmation_url": "https://yoomoney.ru/api-pages/v2/payment-confirm/epl?orderId=23d93cac-000f-5000-8000-126628f15141"
    },
    "created_at": "2019-01-22T14:30:45.129Z",
    "description": "Заказ №1",
    "metadata": {},
    "recipient": {
      "account_id": "100500",
      "gateway_id": "100700"
    },
    "refundable": false,
    "test": false
  }

  public async createPayment() {
  //   curl https://api.yookassa.ru/v3/payments \
  // -X POST \
  // -u <Идентификатор магазина>:<Секретный ключ> \
  // -H 'Idempotence-Key: <Ключ идемпотентности>' \
  // -H 'Content-Type: application/json' \
  // -d '{
  //       "amount": {
  //         "value": "100.00",
  //         "currency": "RUB"
  //       },
  //       "capture": true,
  //       "confirmation": {
  //         "type": "redirect",
  //         "return_url": "https://www.example.com/return_url"
  //       },
  //       "description": "Заказ №1"
  //     }'
  }
}