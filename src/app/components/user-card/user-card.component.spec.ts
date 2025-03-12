import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCardComponent } from './user-card.component';
import { By } from '@angular/platform-browser';

describe('UserCardComponent', () => {
    let component: UserCardComponent;
    let fixture: ComponentFixture<UserCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UserCardComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(UserCardComponent);
        component = fixture.componentInstance;
        component.user = { id: 1, fullName: 'John Doe', email: 'john.doe@example.com' };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display user information', () => {
        // given
        // when
        const userNameElement = fixture.debugElement.query(By.css('.data-row')).nativeElement;

        // then
        expect(userNameElement.textContent).toContain('John Doe');
    });

    it('should emit logout event when logout button is clicked', () => {
        // given
        spyOn(component.logout, 'emit');

        // when
        const logoutButton = fixture.debugElement.query(By.css('.logout-button')).nativeElement;
        logoutButton.click();

        // then
        expect(component.logout.emit).toHaveBeenCalled();
    });
});