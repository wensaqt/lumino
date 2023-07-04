import {
    Column,
    DataType,
    Model,
    Table,
    PrimaryKey,
    AutoIncrement,
    HasMany,
    BelongsToMany
} from 'sequelize-typescript';
  import { Article } from './article.entity';
  import { ArticleAuthors } from './article-authors.entity';
  
  @Table
  export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
  
    @Column(DataType.STRING)
    username: string;
  
    @Column(DataType.STRING)
    email: string;
  
    @Column(DataType.STRING)
    password: string;
  
    @HasMany(() => Article, 'authorId')
    articles: Article[];
  
    @BelongsToMany(() => Article, () => ArticleAuthors)
    coauthoredArticles: Article[];
}