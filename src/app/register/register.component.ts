import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    email = new FormControl('', Validators.required);
    accountName = new FormControl('', Validators.required);

    password = new FormControl('', Validators.required);
    confirmPassword = new FormControl('', Validators.required);
    onSubmit(e:Event): void {

  }
}
