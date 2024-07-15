import { Category } from './category.interface';

export interface Product {
  id: number;
  name: string;
  description: string;
  category: Category;
  price: number;
}
