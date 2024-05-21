import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    email = new FormControl('', Validators.required);
    accountName = new FormControl('', Validators.required);
    password = new FormControl('', Validators.required);
    confirmPassword = new FormControl('', Validators.required);

    onSubmit(): void {
      if (!(this.password !== this.confirmPassword)) {
          const cpe = document.getElementById("confirmPasswordAttention");
          // cpe.textContent = "两次密码不一致";
      }
  }
}
