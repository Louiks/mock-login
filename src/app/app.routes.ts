import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authenticatedGuard, unauthenticatedGuard } from './services/authenticationGuards';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [authenticatedGuard] },
    { path: 'home', component: HomeComponent, canActivate: [unauthenticatedGuard] },
    {
        path: '**', redirectTo: '/login'
    }
];
