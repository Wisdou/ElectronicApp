import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service.service';
import _ from 'lodash';
import { Observable, of, tap } from 'rxjs';
import { PurchasedProductResponse } from '../../services/products/products.service';
import { BasketService, BoughtProductResponse } from '../../services/basket/basket.service';

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

  totalSum: number = 0;
  totalQuantity: number = 0;

  boughtProducts$: Observable<BoughtProductResponse[]> = of([]);
  
  constructor(private authService: AuthService, private basketService: BasketService) {
    const user = this.authService.getUserInfo();
    if (!_.isNil(user)) {
      this.isLoggedIn = true;
      this.userEmail = user.userLogin ?? '';
    }
    else {
      this.isLoggedIn = false;
    }

    this.boughtProducts$ = this.basketService.getBasket().pipe(
      tap((res) => {
        this.totalQuantity = res.length;
        this.totalSum = res.reduce((acc, x) => acc + x.productPrice * x.productQuantity, 0);
      })
    );
  }

  buyProducts(products: BoughtProductResponse[]){
    const productsIds = products.map(x => x.productId);
    this.basketService.buyProducts(productsIds).subscribe(x => {
      alert('Товары куплены');
      this.boughtProducts$ = this.basketService.getBasket().pipe(
        tap((res) => {
          this.totalQuantity = res.length;
          this.totalSum = res.reduce((acc, x) => acc + x.productPrice * x.productQuantity, 0);
        })
      );
    })
  }

  onDelete(product: BoughtProductResponse){
    this.basketService.deleteFromBaset(product.productId).subscribe(x => {
      alert('Товар удален из корзины');
      this.boughtProducts$ = this.basketService.getBasket().pipe(
        tap((res) => {
          this.totalQuantity = res.length;
          this.totalSum = res.reduce((acc, x) => acc + x.productPrice * x.productQuantity, 0);
        })
      );
    })
  }

  logOut() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.userEmail = '';
  }
}
