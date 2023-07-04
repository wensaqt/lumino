import {
    Column,
    DataType,
    Model,
    Table,
    ForeignKey,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    BelongsToMany
  } from 'sequelize-typescript';
  import { User } from './user.entity';
  import { Category } from './category.entity';
  import { ArticleAuthors } from './article-authors.entity';
  
  @Table
  export class Article extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
  
    @Column(DataType.STRING)
    title: string;
  
    @Column(DataType.STRING)
    banner: string;
  
    @Column(DataType.STRING)
    pitch: string;
  
    @Column(DataType.TEXT)
    content: string;
  
    @ForeignKey(() => User)
    @Column
    authorId: number;
  
    @BelongsTo(() => User, 'authorId')
    author: User;
  
    @BelongsToMany(() => User, () => ArticleAuthors)
    coauthors: User[];
  
    @ForeignKey(() => Category)
    @Column
    categoryId: number;
  
    @BelongsTo(() => Category)
    category: Category;
  }