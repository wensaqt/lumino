import {
    Table,
    Column,
    Model,
    ForeignKey,
    PrimaryKey,
  } from 'sequelize-typescript';
  import { User } from './user.entity';
  import { Article } from './article.entity';
  
  @Table
  export class ArticleAuthors extends Model<ArticleAuthors> {
    @ForeignKey(() => User)
    @PrimaryKey
    @Column
    userId: number;
  
    @ForeignKey(() => Article)
    @PrimaryKey
    @Column
    articleId: number;
  }