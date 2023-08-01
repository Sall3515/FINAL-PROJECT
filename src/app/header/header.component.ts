import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { User } from '../types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  search!: string;
  @Input() themeDark = false;

  @Input() user: User | null = null;
  @Output() mySearch = new EventEmitter<string>();
  @Output() signOut = new EventEmitter<void>();

  constructor(public themeService: ThemeService) {}

  setValue(): void {
    this.themeDark = !this.themeDark;
    this.themeService.getValue(this.themeDark);
  }
}
