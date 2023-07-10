import { Controller, Post, Body, Get, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './create-article.dto';
import { Article } from '../../entities/article.entity';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('/add')
  @UseInterceptors(FileInterceptor('banner', {
    storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
            return cb(null, `${randomName}${extname(file.originalname)}`);
        }
    })
  }))
  async createArticle(@UploadedFile() file, @Body() createArticleDto: CreateArticleDto): Promise<Article> {
    createArticleDto.banner = file.path;
    return this.articleService.createArticle(createArticleDto);
  }

  @Get('/all')
  async getAllArticles(): Promise<Article[]> {
    return this.articleService.findAll();
  }
}