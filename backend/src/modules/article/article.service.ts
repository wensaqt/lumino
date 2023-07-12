import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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

    async updateArticle(id: number, createArticleDto: CreateArticleDto): Promise<Article> {
      let article = await this.articleModel.findOne({ where: { id: id }});
      if (!article) throw new NotFoundException('Article non trouvé');
      if (article.authorId !== createArticleDto.authorId) throw new UnauthorizedException('Vous pouvez uniquement modifier vos propres articles');
      
      article.title = createArticleDto.title || article.title;
      article.banner = createArticleDto.banner || article.banner;
      article.pitch = createArticleDto.pitch || article.pitch;
      article.content = createArticleDto.content || article.content;
      article.categoryId = createArticleDto.categoryId || article.categoryId;
  
      return await article.save();
  }

    findAll(): Promise<Article[]> {
      return this.articleModel.findAll();
  }
}