import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeService } from '../services/theme.service';
import { User } from '../types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  search!: string;

  @Input() user: User | null = null;

  @Output() mySearch = new EventEmitter<string>();
  @Output() signOut = new EventEmitter<void>();

  constructor(public themeService: ThemeService) {}

  setValue(): void {
    this.themeService.getNewTheme();
    this.themeService.saveTheme();
  }
}
