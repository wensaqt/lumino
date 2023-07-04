import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
// import { UserModule } from './modules/user/user.module';
// import { CategoryModule } from './modules/category/category.module';
// import { ArticleModule } from './modules/article/article.module';
// import { ArticleCoAuthorsModule } from './modules/article-co-authors/article-co-authors.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}