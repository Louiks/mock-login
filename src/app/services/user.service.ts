import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { fromUserTO, User, UserTO } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private currentUserUrl = 'assets/users/1.json';

    constructor(private http: HttpClient) {
    }

    getCurrentUserData(): Observable<User> {
        return this.http.get<UserTO>(this.currentUserUrl)
            .pipe(map((userTO) => fromUserTO(userTO)));
    }
}
