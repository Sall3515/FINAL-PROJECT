import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ThemeService } from './services/theme.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user$ = this.auth.user;

  constructor(
    public themeService: ThemeService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.themeService.getThemeFromLocal();

    this.auth.Init();
  }

  onSearch(text: string) {
    this.router.navigate(['search-results'], { queryParams: { ingr: text } });
  }

  onSignOut() {
    this.auth.signOut();
  }
}
