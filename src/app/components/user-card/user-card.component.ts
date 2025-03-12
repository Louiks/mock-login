import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatRipple } from "@angular/material/core";

@Component({
    selector: 'app-user-card',
    imports: [MatIconModule, MatIcon, MatRipple, MatIconButton],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true
})
export class UserCardComponent {

    @Input() user!: User;
    @Output() logout: EventEmitter<void> = new EventEmitter<void>();

    readonly MAT_RIPPLE_COLOR: string = 'rgba(0, 0, 0, 0.1)';

}
