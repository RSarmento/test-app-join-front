import { Component } from '@angular/core';
import { CategoryService } from '../../shared/services/category.services';
import { Category } from '../../shared/models/category.interface';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss',
})
export class CategoryPageComponent {
  constructor(private categoryService: CategoryService) {}
  index(event: any) {
    this.categoryService.index().subscribe((resp) => {});
  }
  get(id: number) {
    this.categoryService.get(id).subscribe((resp) => {});
  }
  save(event: any) {
    this.categoryService.save().subscribe((resp) => {});
  }
  update(category: Category) {
    this.categoryService.update(category).subscribe((resp) => {});
  }
  delete(id: number) {
    this.categoryService.delete(id).subscribe((resp) => {});
  }
}
