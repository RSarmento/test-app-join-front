import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.services';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../shared/models/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    ProductPageComponent,
    ProductFormComponent,
    HeaderComponent,
    ProductListComponent,
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
      console.log('chegou paapi', resp);
    });
  }
  get(event: any) {
    this.productService.get(1).subscribe((resp) => {});
  }
  save(event: any) {
    this.productService.save().subscribe((resp) => {});
  }
  update(event: any) {
    this.productService.update().subscribe((resp) => {});
  }
  delete(event: any) {
    this.productService.delete(1).subscribe((resp) => {});
  }

  selectedProductDialog(event: any) {
    const product = this.productItems.find((element) => element.id == event);
    this.dialog.open(ProductDialogComponent, { data: product });
  }
}
