import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../shared/models/category.interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { Product } from '../../shared/models/product.interface';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  @Input() productData: Product | null = null;
  @Output() submitForm = new EventEmitter();
  productForm = this.formBuilder.group({
    name: new FormControl<string | null>(null, Validators.required),
    description: new FormControl<string | null>(null, Validators.required),
    price: new FormControl<number | null>(null, Validators.required),
    category: new FormControl<number | null>(null, Validators.required),
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setFormValues();
  }
  submitProduct() {
    console.log(this.productForm);
    const product = {
      id: this.productData?.id,
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      price: this.productForm.get('price')?.value,
      category: {
        ...this.productData?.category,
        id: this.productForm.get('category')?.value,
      },
    };
    this.submitForm.emit(product);
  }
  setFormValues() {
    if (this.productData) {
      this.productForm.patchValue({
        name: this.productData.name,
        description: this.productData.description,
        price: this.productData.price,
        category: this.productData.category.id,
      });
    }
  }
}
