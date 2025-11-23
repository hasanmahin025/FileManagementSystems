import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
 imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   
  loginForm = new FormGroup({
   
    email: new FormControl('' , [Validators.email , Validators.required]),

    password: new FormControl('',[Validators.required,Validators.minLength(6)])
    
  });
  constructor(private router: Router )
  {   
  }
  onSubmit(){
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)
    }
    alert("Login Successful!");
    this.router.navigate(['/dashboard']);

  }
}
