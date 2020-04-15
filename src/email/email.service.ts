import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';
import { Email } from './email.model';

@Injectable()
export class EmailService {

  constructor(private configService: ConfigService) { }

  sendEmail(message: Email): Promise<any> {
    const apiKey = this.configService.get('email_api_key');
    SendGrid.setApiKey(apiKey);
    return SendGrid.send(message as any);
  }
}
