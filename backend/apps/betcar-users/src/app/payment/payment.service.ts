import { Injectable } from '@nestjs/common';
import axios  from 'axios';
import { v4 as uuidv4 } from 'uuid';

let a;
@Injectable()
export class PaymentService {
   
  public paymentLink: string;

  // public async createPayment() {

    // const idempotenceKey = uuidv4();


    public getPaymentLink = async () => {
      const idempotenceKey = uuidv4();
      try {
        const response = await axios.post(
          `https://api.yookassa.ru/v3/payments`,
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
        return response.data.confirmation.confirmation_url
      } catch (err) {
        console.error(err.toJSON())
      }
    }

  //   axios
  //     .post(
  //       'https://api.yookassa.ru/v3/payments',
  //       {
  //         amount: {
  //           value: "2.00",
  //           currency: "RUB"
  //         },
  //         confirmation: {
  //           type: "redirect",
  //           return_url: "https://www.betcar.ru/main"
  //         },
  //         capture: true,
  //         description: "Покупка услуги",
  //         receipt: {
  //           customer: {
  //             email: "aakngrv@mail.ru"
  //           },
  //           items: [
  //             {
  //               description: "Покупка услуги",
  //               quantity: "1.000",
  //               amount: {
  //                 value: "2.00",
  //                 currency: "RUB"
  //               },
  //               vat_code: 1,
  //               payment_mode: "full_prepayment",
  //               payment_subject: "commodity",
  //               measure: "piece"
  //             }
  //           ]
  //         }
  //       },
  //       {
  //         headers: {
  //           "Content-Type": 'application/json',
  //           "Idempotence-Key": idempotenceKey
  //         },
  //         auth: {
  //           username: '990633',
  //           password: 'live_DrxUqOiVxN7tMlZJ6A9MGNHVZqa3eG7ywD3v_DLn1zM'
  //         },
  //       },
  //     )
  //     .then((response) => {
  //       this.paymentLink = (response.data.confirmation.confirmation_url);
  //       a = this.paymentLink;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  }
// }
