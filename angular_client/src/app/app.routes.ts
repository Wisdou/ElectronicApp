import { Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PurchasedComponent } from './components/purchased/purchased.component';
import { BasketComponent } from './components/basket/basket.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'purchased', component: PurchasedComponent },
  { path: 'basket', component: BasketComponent },
];
