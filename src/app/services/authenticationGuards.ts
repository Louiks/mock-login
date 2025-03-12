import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

const HOME_ROUTE = '/home';
const LOGIN_ROUTE = '/login';

export const authenticatedGuard: CanActivateFn = () => {
    const authService = inject(AuthenticationService);
    const router = inject(Router);
    if (authService.isLoggedIn()) {
        void router.navigate([HOME_ROUTE]);
        return false;
    }
    return true;
};

export const unauthenticatedGuard: CanActivateFn = () => {
    const authService = inject(AuthenticationService);
    const router = inject(Router);
    if (!authService.isLoggedIn()) {
        void router.navigate([LOGIN_ROUTE]);
        return false;
    }
    return true;
};
