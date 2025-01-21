import { Injectable } from '@nestjs/common';
import axios  from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { PAYMENT_URL, RETURN_URL, SHOP_ID, SHOP_PASSWORD } from './payment.constants';

@Injectable()
export class PaymentService {

  public getPaymentLink = async () => {

    const idempotenceKey = uuidv4();

    try {
      const response = await axios.post(
        PAYMENT_URL,
        {
          amount: {
            value: "2.00",
            currency: "RUB"
          },
          confirmation: {
            type: "redirect",
            return_url: RETURN_URL
          },
          capture: true,
          description: "Покупка услуги",
          receipt: {
            customer: {
              email: "aakngrv@mail.ru"
            },
            items: [
              {
                description: "Покупка услуги",
                quantity: "1.000",
                amount: {
                  value: "2.00",
                  currency: "RUB"
                },
                vat_code: 1,
                payment_mode: "full_prepayment",
                payment_subject: "commodity",
                measure: "piece"
              }
            ]
          }
        },
        {
          headers: {
            "Content-Type": 'application/json',
            "Idempotence-Key": idempotenceKey
          },
          auth: {
            username: SHOP_ID,
            password: SHOP_PASSWORD
          },
        },
      )
      return response.data.confirmation.confirmation_url;
    } catch (err) {
      console.error(err)
    }
  }
}

