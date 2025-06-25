import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service.service';
import { inject } from '@angular/core';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const authInfo = authService.getUserInfo();
  if (authInfo?.role === 0){
    return true;
  }
  else{
    return false;
  }
};
