import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-find',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-find.component.html',
  styleUrl: './product-find.component.scss',
})
export class ProductFindComponent {
  @Output() submitForm = new EventEmitter();
  productForm = this.formBuilder.group({
    id: new FormControl<string | null>(null, Validators.required),
  });
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  findProduct() {
    console.log(this.productForm.value.id);
    this.submitForm.emit(this.productForm.value.id);
  }
}
