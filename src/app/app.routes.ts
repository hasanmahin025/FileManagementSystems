import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { SignupComponent } from './pages/signup/signup';
import { DashboardComponent } from './pages/dashboard/dashboard';


export const routes: Routes = [

   {path: '' , redirectTo: 'login',pathMatch: 'full'},
   { path: 'login', component: Login},
   {path: 'signup', component: SignupComponent},
   {path: 'dashboard', component: DashboardComponent}
   
];
