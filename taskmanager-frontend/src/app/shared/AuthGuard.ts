import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './AuthService';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.getToken()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
