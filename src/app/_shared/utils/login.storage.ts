import { User } from '../interfaces/user';

export class LoginStorage {

    private static readonly LOCAL_STORAGE_KEY = '@@session@@';

    static save(user: User) {
        delete user.password;
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(user));
    }

    static remove() {
        localStorage.removeItem(this.LOCAL_STORAGE_KEY);
    }

    static currentUser() {
        const userString = localStorage.getItem(this.LOCAL_STORAGE_KEY);
        return (!userString) ? null : JSON.parse(userString) as User;
    }

    static get isLoggedIn() {
        return Boolean(localStorage.getItem(this.LOCAL_STORAGE_KEY));
    }
}



