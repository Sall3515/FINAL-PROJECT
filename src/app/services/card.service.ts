import { Injectable } from '@angular/core';
import { ENVIRONMENT } from 'src/enivironment/environment';
import { CARD } from '../data';
import { Card } from '../types/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cards = CARD;
  private cartProducts: Card[] = [];
  sum = 0;

  getCards() {
    return this.cards;
  }

  getCart() {
    const parseCards = localStorage.getItem(ENVIRONMENT.cartKey);
    return (this.cartProducts = parseCards ? JSON.parse(parseCards) : '');
  }

  deleteFromCart(id: number) {
    this.cartProducts = this.cartProducts.filter((card) => card.id !== id);
    localStorage.setItem(
      ENVIRONMENT.cartKey,
      JSON.stringify(this.cartProducts) // ბარათის წაშლის პროცესი,აისახოს local storage-ში
    );
  }

  addToCart(id: number) {
    const productToAdd = this.cards.find((card) => card.id === id);
    if (productToAdd) {
      this.cartProducts.push(productToAdd);
    } else {
      throw new Error(`Could not add product to cart. ID: ${id}`);
    }
    localStorage.setItem(
      ENVIRONMENT.cartKey,
      JSON.stringify(this.cartProducts) //ბარათი  cart-ში დამატებისას ასევე ინახება  მეხსიერებაშ
    );
  }

  //ღირებულების შენახვა
  TotalPrice() {
    this.sum = this.cartProducts.reduce(
      (accumulator, card) => accumulator + card.price,
      0
    );
    localStorage.setItem(ENVIRONMENT.totalPriceKey, JSON.stringify(this.sum)); // ბარათის წაშლისას თანხა რჩება // ეს შეიძლება ცალკე გავიტანო.
  }

  getTotalPrice() {
    const parseTotal = localStorage.getItem(ENVIRONMENT.totalPriceKey);
    return (this.sum = parseTotal ? JSON.parse(parseTotal) : 0); //    დააფდეითებული მნიშვნელობას ვერ ვაწვდი update: მგონი გავასწორე
  }
}
