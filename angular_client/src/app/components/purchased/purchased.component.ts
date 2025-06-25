import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service.service';
import _ from 'lodash';
import { ProductsService, PurchasedProductResponse } from '../../services/products/products.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-purchased',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AsyncPipe],
  templateUrl: './purchased.component.html',
  styleUrl: './purchased.component.scss'
})
export class PurchasedComponent {
  isLoggedIn: boolean = false;
  userEmail: string = '';

  boughtProducts$: Observable<PurchasedProductResponse[]> = of([]);

  constructor(private authService: AuthService, 
    private productService: ProductsService) {
    const user = this.authService.getUserInfo();
    if (!_.isNil(user)) {
      this.isLoggedIn = true;
      this.userEmail = user.userLogin ?? '';
    }
    else {
      this.isLoggedIn = false;
    }
    this.boughtProducts$ = this.productService.getPurchased();
  }

  logOut() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.userEmail = '';
  }
}
