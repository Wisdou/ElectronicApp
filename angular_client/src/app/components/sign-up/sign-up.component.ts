import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService, LoginDto } from '../../services/auth/auth-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import _ from 'lodash';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor(private authService: AuthService, private cdRef: ChangeDetectorRef, private router: Router){}

  password: string = '';
  email: string = '';
  errorText: string = '';

  signUp() {
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
  
      this.authService.register(loginDto).subscribe(x => {
        this.router.navigate(['']);
      }, err => {
        this.errorText = 'Ошибка при регистрации';
        this.cdRef.markForCheck();
      });
    }
}
