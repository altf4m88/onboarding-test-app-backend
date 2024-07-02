import { Module } from '@nestjs/common';
import { GatoChatsController } from './gato-chats.controller';
import { GatoChatsService } from './gato-chats.service';

@Module({
  controllers: [GatoChatsController],
  providers: [GatoChatsService]
})
export class GatoChatsModule {}
