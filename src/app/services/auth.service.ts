import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { ENVIRONMENT } from 'src/enivironment/environment';
import { User, UserCred } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // username:kminchelle
  // password:0lelplR

  private baseUrl = ENVIRONMENT.baserUrl;
  private loading$ = new BehaviorSubject<boolean>(false);
  private errorMessage$ = new BehaviorSubject<string>('');
  private user$ = new BehaviorSubject<User | null>(null);

  get loading() {
    return this.loading$.asObservable();
  }
  get errorMessage() {
    return this.errorMessage$.asObservable();
  }
  get user() {
    return this.user$.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {}

  Init() {
    const userString = localStorage.getItem(ENVIRONMENT.userKey);
    if (userString) {
      this.user$.next(JSON.parse(userString));
    }
  }

  signIn(userCred: UserCred) {
    this.loading$.next(true);
    this.http
      .post<User>(`${this.baseUrl}/auth/login`, userCred)
      .pipe(
        tap((res) => {
          this.loading$.next(false);
          this.user$.next(res);
          localStorage.setItem(ENVIRONMENT.userKey, JSON.stringify(res));
          localStorage.setItem(ENVIRONMENT.tokenKey, res.token);
          this.router.navigate(['/home']);
        }),
        catchError((error: HttpErrorResponse) => {
          this.errorMessage$.next(error.error.message);
          this.loading$.next(false);
          return of(null);
        }) //აუცილებლად observable უნდა დააბრუნოს, თუ არაფერი არ გვაქვს  დასაბრუნებლი მაშინ შევქმნით observables,
        //ამ შენთხვევაში  დავაბრუნოთ null
      )
      .subscribe();
  }

  signOut() {
    localStorage.removeItem(ENVIRONMENT.userKey);
    localStorage.removeItem(ENVIRONMENT.tokenKey);
    this.user$.next(null);
  }

  getToken() {
    const token = localStorage.getItem(ENVIRONMENT.tokenKey);
    return token;
  }
}
