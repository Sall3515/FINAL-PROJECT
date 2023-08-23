import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeDark = false;

  public settheme$ = new BehaviorSubject<boolean>(this.themeDark);

  getNewTheme() {
    this.themeDark = !this.themeDark;
    this.settheme$.next(this.themeDark);
    return this.settheme$;
  }

  saveTheme() {
    this.settheme$
      .pipe(
        tap((value) => {
          localStorage.setItem('set_theme', JSON.stringify(value));
        })
      )
      .subscribe();
  }

  getThemeFromLocal() {
    const settheme = localStorage.getItem('set_theme');

    if (settheme === 'true') {
      this.settheme$.next(true);
    } else {
      this.settheme$.next(false);
    }
  }
}
