import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '@office/books';
import { ButtonComponent } from '@office/ui';

@Component({
  selector: 'lib-book',
  standalone: true,
  imports: [ButtonComponent],
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
