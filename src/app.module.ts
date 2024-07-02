import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CatFactsModule } from './cat-facts/cat-facts.module';
import { AuthModule } from './auth/auth.module';
import { GatoChatsModule } from './gato-chats/gato-chats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    CatFactsModule,
    AuthModule,
    GatoChatsModule,
  ],
})
export class AppModule {}
