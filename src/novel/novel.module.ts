import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { NovelInfoEntity } from 'src/entity/novel-info.entity';
import { NovelEntity } from 'src/entity/novels.entity';
import { NovelController } from './novel.controller';
import { NovelService } from './novel.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.production'],
    }),
    TypeOrmModule.forFeature([NovelEntity, NovelInfoEntity]),
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: process.env.MQ_URL,
    }),
  ],
  controllers: [NovelController],
  providers: [NovelService],
})
export class NovelModule {}
