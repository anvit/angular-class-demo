import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cards: Array<string> = ['Display Some Text', 'Another piece of text', 'Some more text','Just text'];
  constructor() { }

  getCards(): Array<string> {
    return this.cards;
  }

  addCard(card: string): void {
    this.cards.push(card);
  }

  deleteItem(item: string): void {
    const index = this.cards.indexOf(item);
    if (index) {
      this.cards.splice(index, 1);
    }
  }
}
