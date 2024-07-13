import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../../shared/models/category.interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

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
export class ProductFormComponent {
  @Output() submitForm = new EventEmitter();
  form = this.formBuilder.group({
    name: new FormControl<string | null>(null, Validators.required),
    description: new FormControl<string | null>(null, Validators.required),
    price: new FormControl<number | null>(null, Validators.required),
    category: new FormControl<Category | null>(null, Validators.required),
  });
  constructor(private formBuilder: FormBuilder) {}

  submitProduct() {
    const credentials = {
      name: this.form.get('name')?.value,
      description: this.form.get('description')?.value,
      price: this.form.get('price')?.value,
      category: this.form.get('category')?.value,
    };
    this.submitForm.emit(credentials);
  }
}
