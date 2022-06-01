import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovelInfoEntity } from 'src/entity/novel-info.entity';
import { NovelEntity } from 'src/entity/novels.entity';
import { NovelController } from './novel.controller';
import { NovelService } from './novel.service';

@Module({
  imports: [TypeOrmModule.forFeature([NovelEntity, NovelInfoEntity])],
  controllers: [NovelController],
  providers: [NovelService],
})
export class NovelModule {}
