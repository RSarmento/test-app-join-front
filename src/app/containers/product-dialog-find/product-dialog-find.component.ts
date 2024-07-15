import { Component } from '@angular/core';
import { ProductFindComponent } from '../../components/product-find/product-find.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../shared/services/product.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { Product } from '../../shared/models/product.interface';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-product-dialog-find',
  standalone: true,
  imports: [
    ProductFindComponent,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIcon,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    ProductFormComponent,
  ],
  templateUrl: './product-dialog-find.component.html',
  styleUrl: './product-dialog-find.component.scss',
})
export class ProductDialogFindComponent {
  productDetail: Product | null = null;
  constructor(
    private productService: ProductService,
    private dialogRef: MatDialogRef<ProductDialogFindComponent>
  ) {}
  findProduct(id: any) {
    this.productService.get(id).subscribe((resp) => {
      this.productDetail = resp;
    });
  }
}
