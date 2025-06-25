import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service.service';
import { inject } from '@angular/core';
import _ from 'lodash';

export const userGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router = inject(Router);
  const authInfo = authService.getUserInfo();
  if (!_.isNil(authInfo)) {
    return true;
  } else {
    router.navigate(['/auth']);
    return false;
  }
};
