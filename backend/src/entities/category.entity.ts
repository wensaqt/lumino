import {
    Column,
    DataType,
    Model,
    Table,
    PrimaryKey,
    AutoIncrement,
    HasMany
  } from 'sequelize-typescript';
  import { Article } from './article.entity';
  
  @Table
  export class Category extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
  
    @Column(DataType.STRING)
    name: string;
  
    @HasMany(() => Article)
    articles: Article[];
  }