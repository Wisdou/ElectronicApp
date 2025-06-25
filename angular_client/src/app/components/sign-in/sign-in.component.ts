import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService, LoginDto } from '../../services/auth/auth-service.service';
import _ from 'lodash';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements AfterViewInit {
  constructor(private authService: AuthService, private cdRef: ChangeDetectorRef, private router: Router){}

  ngAfterViewInit(): void {
    this.togglePasswordVisibility(this.isShowPasswordChecked);
  }

  password: string = '';
  email: string = '';
  errorText: string = '';
  isShowPasswordChecked: boolean = false;

  @ViewChild('passwordVal', { read: ElementRef, static: true })
  passwordInput!: ElementRef;

  togglePasswordVisibility(event: any) {
    this.isShowPasswordChecked = event;
    if (event){
      if (this.passwordInput != null){
        this.passwordInput.nativeElement.type = 'text';
      }
    }
    else{
      if (this.passwordInput != null){
        this.passwordInput.nativeElement.type = 'password';
      }
    }
  }

  signIn() {
    this.errorText = '';
    
    if (_.isEmpty(this.email)){
      this.errorText = 'Почта не может быть пустым значением';
      return;
    }

    if (_.isEmpty(this.password)) {
      this.errorText = 'Пароль не может быть пустым значением';
      return;
    }

    const loginDto: LoginDto = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginDto).subscribe(x => {
      this.router.navigate(['']);
    }, err => {
      this.errorText = 'Пользователь не найден';
      this.cdRef.markForCheck();
    });
  }
}
