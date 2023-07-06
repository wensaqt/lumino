import { Controller, Post, Body } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './create-article.dto';
import { Article } from '../../entities/article.entity';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('/add')
  async createArticle(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articleService.createArticle(createArticleDto);
  }
}