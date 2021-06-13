import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../_shared/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginStorage } from '../_shared/utils/login.storage';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form!: FormGroup;

    constructor(
        private router: Router,
        private loginService: LoginService,
        private snackBar: MatSnackBar,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.initForm();
    }

    get email() {
        return this.form.controls.email;
    }

    get password() {
        return this.form.controls.password;
    }

    private initForm() {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(4)]]
        });
    }

    login() {
        this.loginService.login(this.email.value, this.password.value).subscribe((user) => {
            if (!user) {
                this.email.reset();
                this.password.reset();
                this.form.reset();
                this.snackBar.open('Credentials are incorrect, please try again', '', { duration: 5000 });
                return;
            }
            LoginStorage.save(user);
            this.router.navigate(['/']);
        });
    }
}
