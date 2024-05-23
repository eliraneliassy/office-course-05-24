import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Book, BookComponent, BooksService } from '@office/books';
import { CartService } from '@office/cart-state';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-feed',
  standalone: true,
  imports: [NgFor, AsyncPipe, BookComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {
  booksService = inject(BooksService);
  cartService = inject(CartService);

  books = toSignal(this.booksService.getBooks('Angular'));

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
