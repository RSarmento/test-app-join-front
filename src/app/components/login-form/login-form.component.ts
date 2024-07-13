import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter();
  form = this.formBuilder.group({
    userName: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required),
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form
      .get('userName')
      ?.valueChanges.pipe(debounceTime(300))
      .subscribe((value) => {});
  }

  submitLogin() {
    const credentials = {
      userName: this.form.get('userName')?.value,
      password: this.form.get('password')?.value,
    };
    this.submitForm.emit(credentials);
  }
}
