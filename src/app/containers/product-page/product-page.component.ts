import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.services';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../shared/models/product.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductDialogCreateComponent } from '../product-dialog-create/product-dialog-create.component';
import { ProductDialogFindComponent } from '../product-dialog-find/product-dialog-find.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    ProductPageComponent,
    ProductFormComponent,
    HeaderComponent,
    ProductListComponent,
    MatIconModule,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  productItems: Product[] = [];
  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.index('');
  }
  index(event: any) {
    this.productService.index().subscribe((resp) => {
      this.productItems = resp;
    });
  }
  selectedProductDialog(event: any) {
    const product = this.productItems.find((element) => element.id == event);
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: product,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.index('');
    });
  }
  createProduct() {
    const dialogRef = this.dialog.open(ProductDialogCreateComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.index('');
    });
  }
  findProduct() {
    const dialogRef = this.dialog.open(ProductDialogFindComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.index('');
    });
  }
}
