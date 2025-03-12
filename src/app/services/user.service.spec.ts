import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting, TestRequest } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { fromUserTO, User, UserTO } from '../models/user';
import { provideHttpClient } from "@angular/common/http";

describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                UserService,
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        });
        service = TestBed.inject(UserService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should fetch current user data', () => {
        // given
        const mockUserTO: UserTO = {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john@doe.com",
            "modificationDate": "01-01-2025",
            "creationDate": "01-01-2025",
            "createdBy": "JK"
        };
        const expectedUser: User = fromUserTO(mockUserTO);

        // when
        let result: User | undefined;
        service.getCurrentUserData().subscribe((user: User) => result = user);

        const req: TestRequest = httpMock.expectOne('assets/users/1.json');
        req.flush(mockUserTO);

        // then
        expect(result).toEqual(expectedUser);
    });
});