import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { email } from '@angular/forms/signals';
import { ConfirmRegistration } from '../confirm-registration/confirm-registration';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule ,RouterLink], 
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignupComponent  implements OnInit {

     signupForm!: FormGroup;
     isSubmitting = false;
     
     constructor(
      private fb: FormBuilder,
      private router: Router,
      private http: HttpClient

     ){}
     ngOnInit(): void{
       this.signupForm = this.fb.group({
         email:['' , [Validators.required , Validators.email]]
       });
     }

     onSubmit(): void{
        if(this.signupForm.valid)
        {
          this.isSubmitting = true;

          const emailValue = this.signupForm.get('email')?.value;
          console.log('Sending Email for Verification:', emailValue);

          const apiUrl = 'http://localhost:5000/api/user-management/UserRegistration';
          const payload = {email: emailValue}

          this.http.post(apiUrl, payload).subscribe({
            next: (Response) =>{
              console.log('API Response:' , Response);
             this.router.navigate(['/home/Confirm'], { queryParams: { email: emailValue } });
              alert('Success! Verification code sent to ' + emailValue);
              
            },
            error:(Error) =>{
              console.error('API Error:', Error);
              this.isSubmitting = false;
             alert('Failed to send email. Please try again.');
              
            }
          });
          
        }
        else{
          this.signupForm.markAllAsTouched();
        }
     }

}