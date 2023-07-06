import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from '../../entities/article.entity';
import { CreateArticleDto } from './create-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article)
    private articleModel: typeof Article,
  ) {}

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
        const articleData = {
            title: createArticleDto.title,
            banner: createArticleDto.banner,
            pitch: createArticleDto.pitch,
            content: createArticleDto.content,
            authorId: createArticleDto.authorId,
            categoryId: createArticleDto.categoryId
        };
        return await this.articleModel.create(articleData);
    }
}