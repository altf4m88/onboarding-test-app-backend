import { Controller, Post, Body, UseGuards, UseInterceptors, Request } from '@nestjs/common';
import { GatoChatsService } from './gato-chats.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GatoChatsInterceptor } from 'src/interceptors/gato-chats.interceptor';

@Controller('gato-chats')
@UseInterceptors(GatoChatsInterceptor)
export class GatoChatsController {
  constructor(private readonly gatoChatsService: GatoChatsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async sendChat(@Body() body: { message: string }) {
    return this.gatoChatsService.sendChatToAI(body.message);
  }
}
