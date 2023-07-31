import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/types/card';
import { CardService } from 'src/app/services/card.service';
import { ThemeService } from 'src/app/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  card: Card[] = [];
  productSearch = '';
  @Output() searchProduct = new EventEmitter<string>();

  constructor(
    private cardService: CardService,
    public themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.card = this.cardService.getCards();
  }

  onAddToCart(id: number) {
    this.cardService.addToCart(id);
    this.cardService.TotalPrice();
    alert('Your product has been added to cart!');
  }
}
