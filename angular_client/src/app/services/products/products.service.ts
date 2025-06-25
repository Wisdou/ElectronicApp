import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private controller: string = 'products';

  constructor(private httpService: HttpCustomService) { }

  getProducts(category?: string, searchText?: string): Observable<ProductsDto[]> {
    const method = 'GetProducts';

    const params = new URLSearchParams();

    if (category) {
      params.append("category", category);
    }

    if (searchText) {
      params.append("searchText", searchText);
    }

    const paramsStr = params.toString();

    const api = `api/${this.controller}${paramsStr ? `?${paramsStr}` : ""}`;

    return this.httpService.getRequest(api);
  }

  addProduct(newProduct: FormData) {
    const method = 'add';
    const api = `api/${this.controller}/${method}`;
    const newOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      }),
    };
    return this.httpService.postRequest(api, newProduct, false, {});
  }

  getPurchased(): Observable<PurchasedProductResponse[]>{
    const method = 'purchased';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.getRequest(api);
  }

  updateProduct(id: string, editProduct: FormData) {
    const method = 'update';
    const api = `api/${this.controller}/${method}/${id}`;
    const newOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      }),
    };
    return this.httpService.postRequest(api, editProduct, false, {});
  }

  importFromExcel(formData: FormData){
    const method = 'from-excel';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, formData, false, {});
  }

  deleteProduct(productId: string) {
    const method = 'delete';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, productId);
  }
}

export class PurchasedProductResponse{
  public id!: string;
  public productCategory?: string;
  public productName?: string;
  public quantity!: number;
  public price!: number;
  public userEmail!: string;
  public imageUrl!: string;
}

export class ProductsDto {
  public id!: string;
  public name?: string;
  public description?: string;
  public price!: number;
  public imageUrl!: string;
  public category!: string;
  public quantity!: number;
}