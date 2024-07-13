import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LoginService } from '../../shared/services/login.services';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(private loginService: LoginService) {}
  login(event: any) {
    this.loginService
      .login(event.userName, event.password)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
