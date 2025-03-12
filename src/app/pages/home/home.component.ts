import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthenticationService } from '../../services/authentication.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { User } from '../../models/user';
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: 'app-home',
    imports: [UserCardComponent],
    providers: [UserService],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: true
})
export class HomeComponent implements OnInit, OnDestroy {

    userData?: User;
    iframeUrl: SafeResourceUrl;

    private unsubscribe$ = new Subject<void>();

    constructor(private userService: UserService,
                private sanitizer: DomSanitizer,
                private authenticationService: AuthenticationService) {
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.iframeUrl);
    }

    ngOnInit(): void {
        this.userService.getCurrentUserData()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((user) => {
                this.userData = user
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    logout(): void {
        this.authenticationService.logout();
        window.location.reload();
    }
}
