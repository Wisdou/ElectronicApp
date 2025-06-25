import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { Observable } from 'rxjs';
import { PurchasedProductResponse } from '../products/products.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private controller: string = 'basket';

  constructor(private httpService: HttpCustomService) { }

  getBasket(): Observable<BoughtProductResponse[]>{
    const api = `api/basket`;
    return this.httpService.getRequest(api);
  }

  buyProducts(products: string[]){
    const api = `api/basket/buy`;
    return this.httpService.postRequest(api, products);
  }

  deleteFromBaset(id: string){
    const api = `api/basket/delete/${id}`;
    return this.httpService.postRequest(api, '');
  }

  addToBasket(productId: string, quantity: number): Observable<any>{
    const api = `api/${this.controller}/${productId}?quantity=${quantity}`;
    return this.httpService.postRequest(api, '');
  }
}

export class BoughtProductResponse {
  public productId!: string;
  public productCategory?: string;
  public productName?: string;
  public productQuantity!: number;
  public productPrice!: number;
  public userEmail!: string;
  public imageUrl!: string;
}