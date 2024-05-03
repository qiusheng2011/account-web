import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AccountService } from './app.config.server';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AccountService],
})
export class AppComponent {
  title = 'account-web';
  loginForm = this.fb.group({
    username: '',
    password: '',
  });

  constructor(
    private fb: FormBuilder,
    private account_service: AccountService
  ) {}

  loginSubmit(): void {
    console.log(this.loginForm.value);
    const response = this.account_service.login(this.loginForm.value);
    response.subscribe((resp) => {
      console.log(resp);
      alert(JSON.stringify(resp.body));
    });
  }
}
