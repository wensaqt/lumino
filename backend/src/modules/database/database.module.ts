import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../entities/user.entity';
import { Article } from '../../entities/article.entity';
import { Category } from '../../entities/category.entity';
import { ArticleAuthors } from '../../entities/article-authors.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'win$aries8991',
      database: 'luminodb',
      models: [User, Article, Category, ArticleAuthors],
      autoLoadModels: true,
      synchronize: true, // Crée automatiquement les tables si elles n'existent pas
    }),
  ],
  exports: [SequelizeModule], // On exporte SequelizeModule pour pouvoir l'importer dans d'autres modules
})
export class DatabaseModule {}