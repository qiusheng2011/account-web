import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AccountService } from './app.config.server';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { config } from './app.config.server';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NavigationComponent,
    FooterComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AccountService],
})
export class AppComponent {
  ngAfterViewInit() {
      const autherization = localStorage.getItem("Autherization");
      if (!autherization) {
         config.routers.navigation("/login")
      }
  }
}
