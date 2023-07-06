import { IsString, IsNumber } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  title: string;

  @IsString()
  banner: string;

  @IsString()
  pitch: string;

  @IsString()
  content: string;

  @IsNumber()
  authorId: number;

  @IsNumber()
  categoryId: number;
}

export default CreateArticleDto;