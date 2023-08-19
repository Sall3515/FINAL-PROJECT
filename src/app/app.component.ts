import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme = false;
  user$ = this.auth.user;

  constructor(
    public themeService: ThemeService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    const settheme = localStorage.getItem('set_theme');
    if (settheme === 'true') {
      this.themeService.settheme = true;
    } else {
      this.themeService.settheme = false;
    }
    this.auth.Init();
  }

  saveTheme() {
    this.theme = this.themeService.settheme;
    let themeString = JSON.stringify(this.theme);
    localStorage.setItem('set_theme', themeString);
  }

  onSearch(text: string) {
    this.router.navigate(['search-results'], { queryParams: { ingr: text } });
  }

  onSignOut() {
    this.auth.signOut();
  }
}
