import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public settheme!: boolean;

  getValue(value: boolean): boolean {
    this.settheme = value;
    return this.settheme;
  }
}
