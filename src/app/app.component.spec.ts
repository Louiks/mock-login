import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        // given
        const fixture = TestBed.createComponent(AppComponent);

        // when
        const app = fixture.componentInstance;

        // then
        expect(app).toBeTruthy();
    });

    it(`should have the 'mock-login' title`, () => {
        // given
        const fixture = TestBed.createComponent(AppComponent);

        // when
        const app = fixture.componentInstance;

        // then
        expect(app.title).toEqual('mock-login');
    });
});