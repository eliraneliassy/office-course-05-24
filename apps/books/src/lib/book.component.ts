import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '@office/books';

@Component({
  selector: 'lib-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() book?: Book;
  @Output() addToCart = new EventEmitter<Book>();
  @Output() removeFromCart = new EventEmitter<Book>();

  addToCartHandler(){
    this.addToCart.emit(this.book);
  }

  removeFromCartHandler(){
    this.removeFromCart.emit(this.book);
  }
}
