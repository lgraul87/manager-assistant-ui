import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStorage } from '../_shared/utils/login.storage';
import { User } from '../_shared/interfaces/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentUser!: User;
  isCandidateAccessible: boolean;
  isEmployeeAccessible: boolean;

  constructor(private router: Router) {
    this.currentUser = LoginStorage.currentUser() as User;
    this.isCandidateAccessible = this.currentUser.role === 'admin' || this.currentUser.role === 'rrhh';
    this.isEmployeeAccessible = this.currentUser.role === 'admin' || this.currentUser.role === 'finance';
  }

  ngOnInit(): void {
    this.currentUser = LoginStorage.currentUser() as User;
  }

  logout() {
    LoginStorage.remove();
    this.router.navigate(['login']);
  }
}
