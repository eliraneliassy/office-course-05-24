import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartService} from '@office/cart-state';
import { Book, BookComponent } from '@office/books';

@Component({
  selector: 'lib-cart',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartService = inject(CartService);

  books$ = this.cartService.getCart();

  removeFromCart(book: Book) {
    this.cartService.removeFromCart(book);
  }
}
