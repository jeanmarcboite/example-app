import { Component, Input } from '@angular/core';

import { Book } from '../models/book';


@Component({
  selector: 'bc-book-price',
  template: `
    <h5>Retail price:</h5>
      {{ price }}
   `,
  styles: [`
    h5 {
      margin-bottom: 5px;
    }
  `]
})
export class BookPriceComponent {
  @Input() book: Book;

    get price() {
        var result : string = "?"
        if (this.book.saleInfo && this.book.saleInfo.retailPrice)
            result = `${this.book.saleInfo.retailPrice.amount} ${this.book.saleInfo.retailPrice.currencyCode}`
        return result.replace(/EUR$/, "€")
  }
}
