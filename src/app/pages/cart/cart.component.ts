import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/types/card';
import { CardService } from 'src/app/services/card.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  card: Card[] = [];

  sum: any = 0; // აქ    ჯერ  ვერ  ვხვდები  რა  უნდა  გავასწორო  და ამიტომ any დავამატე , number  მქონდა თავიდან

  constructor(
    private cardService: CardService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.card = this.cardService.getCart();
    this.sum = this.cardService.getTotalPrice();
    console.log(this.card);
  }

  onDelete(id: number) {
    this.cardService.deleteFromCart(id);
    this.card = this.cardService.getCart();
    this.sum = this.cardService.TotalPrice();
    this.sum = this.cardService.getTotalPrice();
  }
}
