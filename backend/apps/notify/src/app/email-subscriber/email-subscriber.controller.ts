import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { EmailSubscriberService } from './email-subscriber.service';
import { Controller } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { RabbitRouting } from '@backend/shared/shared-types';
import { MailService } from '../mail/mail.service';

@Controller()
export class EmailSubscriberController {
  constructor(
    private readonly subscriberService: EmailSubscriberService,
    private readonly mailService: MailService,
  ) {}

  @RabbitSubscribe({
    exchange: 'betcar.notify',
    routingKey: RabbitRouting.AddSubscriber,
    queue: 'betcar.notify',
  })
  public async create(subscriber: CreateSubscriberDto) {
    console.log(subscriber);
    await this.subscriberService.addSubscriber(subscriber);
    await this.mailService.sendNotifyNewSubscriber(subscriber);
  }
}