import { Component, Inject } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Product } from '../../shared/models/product.interface';
import { MatIcon } from '@angular/material/icon';
import { ProductService } from '../../shared/services/product.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductFormComponent } from '../../components/product-form/product-form.component';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    ReactiveFormsModule,
    ProductFormComponent,
  ],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.scss',
})
export class ProductDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private productService: ProductService,
    private dialogRef: MatDialogRef<ProductDialogComponent>
  ) {}
  editProduct(product: Product) {
    this.productService.update(product).subscribe((resp) => {
      this.dialogRef.close();
    });
  }
  deleteProduct() {
    this.productService.delete(this.product.id).subscribe((resp) => {
      this.dialogRef.close();
    });
  }
}
