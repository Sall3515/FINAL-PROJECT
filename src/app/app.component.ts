import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CARD } from './data';
import { AuthService } from './services/auth.service';

import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  card = CARD;
  theme = false;
  user$ = this.auth.user;

  constructor(
    public themeService: ThemeService,
    private router: Router,
    private auth: AuthService
  ) {}

  onDeleteCard(title: string) {
    this.card = this.card.filter((card) => card.title !== title);
  }

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
    // console.log(themeString);
  }

  onSearch(text: string) {
    // text-ი იღებს  header კომპონენტიდან დაემითებულ   სტრინგს

    this.router.navigate(['search-results'], { queryParams: { ingr: text } });
    //search-result კომპონენტში წვდომა გვექნებ ing პარამეტრის მნიშვნელობაზე
  }
  onSignOut() {
    this.auth.signOut();
  }
}
