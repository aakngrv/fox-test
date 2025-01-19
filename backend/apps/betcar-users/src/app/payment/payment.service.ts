import { Injectable } from '@nestjs/common';
import axios  from 'axios';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class PaymentService {

  public async createPayment() {
    const idempotenceKey = uuidv4();

    axios
      .post(
        'https://api.yookassa.ru/v3/payments',
        {
          amount: {
            value: "2.00",
            currency: "RUB"
          },
          confirmation: {
            type: "redirect",
            return_url: "https://www.betcar.ru/main"
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
            username: '990633',
            password: 'live_DrxUqOiVxN7tMlZJ6A9MGNHVZqa3eG7ywD3v_DLn1zM'
          },
        },
      )
      .then((response) => {
        console.log(response.data.confirmation.confirmation_url);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}