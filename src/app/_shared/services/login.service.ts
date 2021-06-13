import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private readonly url = environment.url;

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<User | null>(`${this.url}/users/login`, { email, password });
    }
}
