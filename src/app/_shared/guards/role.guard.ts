import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Role, User } from '../interfaces/user';
import { LoginStorage } from '../utils/login.storage';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot): boolean | UrlTree {
        const roles = next.data.roles as Role[];
        const currentUser = LoginStorage.currentUser() as User;

        if (roles.includes(currentUser.role)) {
            return true;
        }

        if (currentUser.role === 'finance') {
            return this.router.parseUrl('employees');
        }

        if (currentUser.role === 'rrhh') {
            return this.router.parseUrl('candidates');
        }

        return this.router.parseUrl('/');
    }
}
