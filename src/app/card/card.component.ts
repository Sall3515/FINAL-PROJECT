import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../types/card';
import { ThemeService } from '../services/theme.service';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card!: Card;
  @Input() isCart = false;
  @Output() deleteC = new EventEmitter<number>();
  @Output() addToCart = new EventEmitter<number>();

  constructor(public themeService: ThemeService, private auth: AuthService) {}
  a = this.auth.getToken();
}
