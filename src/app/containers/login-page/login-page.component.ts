import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LoginService } from '../../shared/services/login.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(private loginService: LoginService, private router: Router) {}
  login(event: any) {
    this.loginService
      .login(event.userName, event.password)
      .subscribe((resp) => {
        console.log(resp);
        sessionStorage.setItem('token', '1');
        this.router.navigate(['/product']);
      });
  }
}
