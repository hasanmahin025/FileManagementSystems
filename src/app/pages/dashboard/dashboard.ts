import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  template: `
    <h1>Welcome to the Dashboard!</h1>
    <button (click)="logout()">Logout</button>
  `,
  styles: ``
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}