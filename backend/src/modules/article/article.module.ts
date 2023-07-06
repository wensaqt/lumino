import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { Article } from '../../entities/article.entity';

@Module({
    imports: [SequelizeModule.forFeature([Article])],
    controllers: [ArticleController],
    providers: [ArticleService],
  })
  export class ArticleModule {}