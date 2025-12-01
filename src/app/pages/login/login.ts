import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { email } from '@angular/forms/signals';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule , CommonModule , RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
     
     loginForm!: FormGroup;
     isSubmitting = false;

     constructor(
      private fb: FormBuilder,
      private http:HttpClient,
      private router: Router
     ){}

     ngOnInit(): void{
      this.loginForm = this.fb.group({
        Username:['' , Validators.required],
        password:['' , Validators.required]

      });
     }
     onSubmit(): void{
      if(this.loginForm.valid)
      {
        this.isSubmitting = true
        const payload = this.loginForm.value

        const apiUrl = 'http://localhost:5000/api/user-management/login';
        this.http.post(apiUrl , payload).subscribe({
          next:(Response : any) =>{

            this.isSubmitting = false
            console.log('Login Success:' ,Response);

            if(Response.token){
              localStorage.setItem('token' , Response.token)
            }
            this.router.navigate(['/home/dashboard'])
            
          } ,
          error:(Error)=>{
            this.isSubmitting = false
            console.error('Login error', Error);
            alert('Login failed. Please check your username and password.')
            
          } 

        });
      }
      else
      {
        this.loginForm.markAllAsTouched();
      }
     }
 
}