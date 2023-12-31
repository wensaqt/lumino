import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { ArticleModule } from './modules/article/article.module';
import { CategoryModule } from './modules/category/category.module';
// import { ArticleCoAuthorsModule } from './modules/article-co-authors/article-co-authors.module';

@Module({
  imports: [DatabaseModule, UserModule, ArticleModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}