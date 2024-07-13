import { Component } from '@angular/core';
import { CategoryService } from '../../shared/services/category.services';

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
  get(event: any) {
    this.categoryService.get().subscribe((resp) => {});
  }
  save(event: any) {
    this.categoryService.save().subscribe((resp) => {});
  }
  update(event: any) {
    this.categoryService.update().subscribe((resp) => {});
  }
  delete(event: any) {
    this.categoryService.delete().subscribe((resp) => {});
  }
}
