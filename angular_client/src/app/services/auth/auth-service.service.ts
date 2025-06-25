import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { catchError, mapTo, Observable, of, tap } from 'rxjs';
import _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly controller = 'auth';
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly USER_INFO = 'USER_INFO';

  private loggedUserInfo?: AccountInfo;

  constructor(private http: HttpCustomService) {}

  changePassword(changePasswordDto: ChangePasswordDto): Observable<boolean> {
    let method: string = 'ChangePassword';
    return this.http.postRequest(
      `api/${this.controller}/${method}`,
      changePasswordDto
    );
  }

  getUserInfo(): AccountInfo | undefined {
    if (_.isNil(this.loggedUserInfo)) {
      const item = localStorage.getItem(this.USER_INFO);
      if (item != null) {
        this.loggedUserInfo = JSON.parse(item);
      }
    }
    return this.loggedUserInfo;
  }

  login(loginDto: LoginDto): Observable<any> {
    let method: string = 'SignIn';
    return this.http
      .postRequest(`api/${this.controller}/${method}`, loginDto)
      .pipe(
        tap((tokens) => this.doLoginUser(tokens))
      );
  }

  register(registerDto: LoginDto): Observable<any> {
    let method: string = 'SignUp';
    return this.http.postRequest(
      `api/${this.controller}/${method}`,
      registerDto
    ).pipe(
      tap((tokens) => this.doLoginUser(tokens))
    );
  }

  logout() {
    this.doLogoutUser();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  // refreshToken() {
  //   return this.http
  //     .post<any>(`${config.apiUrl}/refresh`, {
  //       refreshToken: this.getRefreshToken(),
  //     })
  //     .pipe(
  //       tap((tokens: Tokens) => {
  //         this.storeJwtToken(tokens.jwt);
  //       })
  //     );
  // }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(tokens: TokenRes) {
    this.loggedUserInfo = {
      userId: tokens.userid,
      userLogin: tokens.username,
      role: tokens.role,
    };
    localStorage.setItem(this.USER_INFO, JSON.stringify(this.loggedUserInfo));
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUserInfo = undefined;
    this.removeTokens();
  }

  private storeTokens(tokens: TokenRes) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access_token);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.USER_INFO);
  }
}

export class LoginDto
{
    public email?: string
    public password?: string
}

export class ChangePasswordDto {
  public email?: string;
  public oldPassword?: string;
  public newPassword?: string;
}

export interface AccountInfo{
  userId?: number;
  userLogin?: string;
  role?: number;
}

export class TokenRes {
  public access_token!: string;
  public username!: string;
  public userid!: number;
  public role!: number;
}

export class RegisterDto {
  name!: string;
  surname!: string;
  email!: string;
  password!: string;
  login!: string;
  organization?: string;
}

export class RegisterAdminDto {
  name!: string;
  surname!: string;
  email!: string;
  password!: string;
  login!: string;
  organization?: string;
  role!: number;
}