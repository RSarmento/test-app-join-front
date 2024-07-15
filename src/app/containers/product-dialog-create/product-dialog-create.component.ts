import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { Product } from '../../shared/models/product.interface';
import { ProductService } from '../../shared/services/product.services';
import { MatIcon } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog-create',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIcon,
    MatInputModule,
    ReactiveFormsModule,
    ProductFormComponent,
  ],
  templateUrl: './product-dialog-create.component.html',
  styleUrl: './product-dialog-create.component.scss',
})
export class ProductDialogCreateComponent {
  constructor(
    private productService: ProductService,
    private dialogRef: MatDialogRef<ProductDialogCreateComponent>
  ) {}
  createProduct(product: Product) {
    this.productService.save(product).subscribe((resp) => {
      this.dialogRef.close();
    });
  }
}
