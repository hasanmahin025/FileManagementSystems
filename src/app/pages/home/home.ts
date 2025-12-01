import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Required for *ngIf

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  constructor(private router: Router) {}

  
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); 
  }

  logout(){
    
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}