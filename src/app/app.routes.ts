import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { SignupComponent } from './pages/signup/signup';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { App } from './app';
import { Welcome } from './pages/welcome/welcome';
import { ConfirmRegistration } from './pages/confirm-registration/confirm-registration';
import { guestGuard } from '../guest.guard';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: Home,
        children: [

            { path: '', component: Welcome , canActivate: [guestGuard]},

            { path: 'login', component: Login, canActivate: [guestGuard] },


            { path: 'register', component: SignupComponent, canActivate: [guestGuard] },
            { path: 'Confirm', component: ConfirmRegistration , canActivate: [guestGuard]},
            { path: 'dashboard', component: DashboardComponent }

        ]
    },
    

];
