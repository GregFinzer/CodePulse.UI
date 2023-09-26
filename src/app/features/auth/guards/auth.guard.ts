import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import jwt_decode from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  // Check for the JWT Token
  const cookieService = inject(CookieService);
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.getUser();

  let token = cookieService.get('Authorization');
  if (token && user) {
    var decodedToken: any = token.replace('Bearer ', '');
    decodedToken = jwt_decode(decodedToken);

    //Check if token has expired
    const expirationDate = decodedToken.exp * 1000;
    const currentTime = new Date().getTime();

    if (expirationDate < currentTime) {
      //Logout
      authService.logout();
      //Redirect to login page
      return router.createUrlTree(['/login'], {queryParams: { returnUrl: state.url }});
    }
    else
    {
      //Token is still valid
      
      if (user.roles.includes('Writer'))
      {
        return true;
      }
      else
      {
        alert("Unauthorized");
        return false;
      }
    }
  }
  else
  {
    //Logout
    authService.logout();
    //Redirect to login page
    return router.createUrlTree(['/login'], {queryParams: { returnUrl: state.url }});
  }
};
