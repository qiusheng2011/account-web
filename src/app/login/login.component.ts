import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AccountService } from '../app.config.server';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  title = 'account-web';
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private account_service: AccountService
  ) {}

  loginSubmit(): void {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      console.error('表单无效');
      this.loginForm.reset();
      return;
    }
    const response = this.account_service.login(this.loginForm.value);
    response.subscribe((resp: any) => {
      console.log(resp);
      alert(JSON.stringify(resp.body));
      if (resp.body && resp.status === 200) {
        localStorage.setItem(
          'Autherization',
          'Bearer ' + resp.body?.access_token
        );
        localStorage.setItem('RefreshToken', resp.body?.refresh_token);
      }
    });
  }
}
