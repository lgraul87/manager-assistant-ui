import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';

import { LoginStorage } from '../utils/login.storage';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean | UrlTree {
        if (LoginStorage.isLoggedIn) {
            return true;
        }
        return this.router.parseUrl('login');
    }
}
