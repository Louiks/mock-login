import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    Validators
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { TextInputComponent } from '../custom-text-input/custom-text-input.component';
import { UserCredentials } from '../../../models/user';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TextInputComponent, MatRippleModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

    private readonly EMAIL_PATTERN: RegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    @Input() isLoading: boolean = false;
    @Output() login: EventEmitter<UserCredentials> = new EventEmitter<UserCredentials>();

    loginForm: FormGroup;
    readonly MAT_RIPPLE_COLOR = 'rgba(255, 255, 255, 0.1)';

    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, this.customEmailValidator.bind(this)]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get email(): FormControl {
        return this.loginForm.get('email') as FormControl;
    }

    get password(): FormControl {
        return this.loginForm.get('password') as FormControl;
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            return;
        }
        const userCredentials: UserCredentials = { email: this.email.value, password: this.password.value };
        this.login.emit(userCredentials);
    }

    private customEmailValidator(control: AbstractControl): ValidationErrors | null {
        return this.EMAIL_PATTERN.test(control.value) ? null : { invalidEmail: true };
    }
}
