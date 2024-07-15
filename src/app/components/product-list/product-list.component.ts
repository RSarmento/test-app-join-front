import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../shared/models/product.interface';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  @Input() productItems: Product[] = [];
  @Output() selectedProduct = new EventEmitter();
  displayedColumns: string[] = ['name', 'description', 'price', 'category'];
  selectProductRow(row: any) {
    const productId = row.id;
    this.selectedProduct.emit(productId);
  }
}
