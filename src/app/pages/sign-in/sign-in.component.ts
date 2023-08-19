import { Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  signInInfo = {
    username: '',
    password: '',
  };
  loading$ = this.auth.loading;
  errorMessage$ = this.auth.errorMessage;

  vm$ = combineLatest([this.loading$, this.errorMessage$]).pipe(
    map(([loading, errorMessage]) => ({ loading, errorMessage }))
  );

  constructor(public themeService: ThemeService, private auth: AuthService) {}

  OnSignIn() {
    this.auth.signIn(this.signInInfo);
    console.log(this.signInInfo);
  }
}
