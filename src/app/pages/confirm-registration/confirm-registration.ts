import { CommonModule} from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-registration',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule] ,
  templateUrl: './confirm-registration.html',
  styleUrl: './confirm-registration.css',
})
export class ConfirmRegistration  implements OnInit{

   confirmForm!:FormGroup;
   isSubmitting = false;
   
   constructor(
      
    private fb : FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute

   ){}
   ngOnInit(): void{
    const emailFromstep1 = this.route.snapshot.queryParams['email'] || ' ';
    this.confirmForm = this.fb.group({
      email: [emailFromstep1,[Validators.required,Validators.email]],
      pin:['',Validators.required],
      userName:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
   }

   onSubmit(): void{
    if(this.confirmForm.valid)
    {
      this.isSubmitting = true;
      const payload = this.confirmForm.value;

      const apiUrl = 'http://localhost:5000/api/user-management/registration/confirm'; 
      this.http.post(apiUrl , payload).subscribe({
        next:(Response) => {
          this.isSubmitting = false;
          alert('Registration Confirm! Please Login');
          this.router.navigate(['/home/login']);
        },
        error: (Error) =>{
          this.isSubmitting = false;
          console.error('API Error:', Error);
          alert('Registration failed. Check your PIN or Username.');
          
        }
      });
    }
    else
    {
      this.confirmForm.markAllAsTouched();
    }
   }

}