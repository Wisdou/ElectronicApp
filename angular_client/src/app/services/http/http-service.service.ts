import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth-service.service';
import _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class HttpCustomService {
  private authService!: AuthService;

  public baseService: string = 'http://localhost:5000';
  private readonly defaultOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {
    this.authService = new AuthService(this);
  }

  public getBlobRequest(api: string): Observable<any> {
    const apiController: string = `${this.baseService}/${api}`;
    let jwtToken = this.authService.getJwtToken();
    let initOptions = this.defaultOptions;
    let resHeaders = initOptions?.headers ?? new HttpHeaders();
    if (!_.isNil(jwtToken)) {
      resHeaders = resHeaders.set('Authorization', `Bearer ${jwtToken}`);
    }

    const resOptions: any = { headers: resHeaders, responseType: 'blob' };
    _.defaults(resOptions, this.defaultOptions);

    return this.httpClient.get(apiController, resOptions);
  }

  public getRequest(api: string): Observable<any> {
    const apiController: string = `${this.baseService}/${api}`;
    let jwtToken = this.authService.getJwtToken();
    let initOptions = this.defaultOptions;
    let resHeaders = initOptions?.headers ?? new HttpHeaders();
    if (!_.isNil(jwtToken)) {
      resHeaders = resHeaders.set('Authorization', `Bearer ${jwtToken}`);
    }

    const resOptions: any = { headers: resHeaders };
    _.defaults(resOptions, this.defaultOptions);

    return this.httpClient.get(apiController, resOptions);
  }

  public postRequest(
    api: string,
    body: any,
    stringifyResult: boolean = true,
    customOptions?: any
  ): Observable<any> {
    const apiController: string = `${this.baseService}/${api}`;
    let jwtToken = this.authService.getJwtToken();
    let initOptions = customOptions ?? this.defaultOptions;
    let resHeaders = initOptions?.headers ?? new HttpHeaders();
    if (!_.isNil(jwtToken)){
      resHeaders = resHeaders.set('Authorization', `Bearer ${jwtToken}`);
    }

    const resOptions: any = {headers: resHeaders};
    _.defaults(resOptions, customOptions ?? this.defaultOptions);

    return this.httpClient.post(
      apiController,
      stringifyResult ? JSON.stringify(body) : body,
      resOptions
    );
  }
}
