import { Component, Inject } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Product } from '../../shared/models/product.interface';
import { MatIcon } from '@angular/material/icon';
import { ProductService } from '../../shared/services/product.services';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatIcon],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.scss',
})
export class ProductDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService
  ) {}

  deleteProduct() {
    console.log('deleta');
    this.productService.delete(this.data.id).subscribe((resp) => {
      console.log(resp);
    });
  }
}
