import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/authentication/login-form/login-form.component';
import { AuthenticationService } from "../../services/authentication.service";
import { Subject, takeUntil } from "rxjs";
import { Router } from "@angular/router";
import { UserCredentials } from "../../models/user";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    standalone: true,
    imports: [
        LoginFormComponent
    ]
})
export class LoginComponent {

    private readonly HOME_ROUTE = '/home';
    destroyed$: Subject<void> = new Subject<void>();
    loading: boolean = false;

    constructor(public authenticationService: AuthenticationService, private router: Router) {
    }

    onLogin(userCredentials: UserCredentials): void {
        this.loading = true;
        this.authenticationService.login(userCredentials.email, userCredentials.password)
            .pipe(takeUntil(this.destroyed$))
            .subscribe({
                next: () => {
                    this.loading = false;
                    void this.router.navigate([this.HOME_ROUTE]);
                }
            });
    }
}
