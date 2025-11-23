import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule], 
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignupComponent {

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router) {}

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup Info:', this.signupForm.value);
      alert("Account created successfully!");
      this.router.navigate(['/login']);
    }
  }
}