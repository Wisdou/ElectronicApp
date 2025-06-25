import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service.service';
import _ from 'lodash';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  isLoggedIn: boolean = false;
  userEmail: string = '';

  constructor(private authService: AuthService) {
    const user = this.authService.getUserInfo();
    if (!_.isNil(user)) {
      this.isLoggedIn = true;
      this.userEmail = user.userLogin ?? '';
    }
    else {
      this.isLoggedIn = false;
    }
  }

  logOut() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.userEmail = '';
  }
}
