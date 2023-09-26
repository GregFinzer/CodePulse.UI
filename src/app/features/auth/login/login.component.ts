import { Component, OnDestroy } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  model: LoginRequest;
  private loginSubscription?: Subscription;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.model = { email: '', password: '' };
  }
  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }

  onFormSubmit() {
    this.loginSubscription = this.authService.login(this.model).subscribe({
      next: (response) => {
        //Set Auth Cookie
        this.cookieService.set(
          'Authorization',
          `Bearer ${response.token}`,
          undefined,
          '/',
          undefined,
          true,
          'Strict'
        );

        // Set User
        this.authService.setUser({
          email: response.email,
          roles: response.roles,
        });
        
        //Redirect to home page
        this.router.navigate(['/']);
      },
    });
  }
}
