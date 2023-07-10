import { Injectable } from '@nestjs/common';
import { Category } from '../../entities/category.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}

  async getCategories(): Promise<Category[]> {
    return this.categoryModel.findAll();
  }
}