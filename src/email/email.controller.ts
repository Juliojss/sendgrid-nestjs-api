import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';
import { Email } from './email.model';

@Controller('email')
export class EmailController {

  constructor(private readonly emailService: EmailService) { }

  @Get()
  async getEmail(): Promise<object> {
    try {
      const msg: Email = {
        to: 'juliosaldanha71@gmail.com',
        from: 'juliosaldanha71@gmail.com',
        subject: 'First email',
        text: 'Meu primeiro envio de email com serviço send grid - julio saldanha',
        html: '<h1>Seja bem vindo</h1><p>Olá, teste realido com sucesso</p>',
      };
      const email = await this.emailService.sendEmail(msg);
      return Promise.resolve({ message: 'deu certo', status: email.statusCode });
    } catch (error) {
      return { message: 'deu ruim', error };
    }
  }
}
