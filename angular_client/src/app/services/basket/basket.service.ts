import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private controller: string = 'basket';

  constructor(private httpService: HttpCustomService) { }

  addToBasket(productId: string, quantity: number): Observable<any>{
    const api = `api/${this.controller}/${productId}?quantity=${quantity}`;
    return this.httpService.postRequest(api, '');
  }
}
