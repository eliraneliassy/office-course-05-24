import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartStore } from '@office/cart-state';
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
  cartStore = inject(CartStore);


  // books$ = this.cartService.getCart();
  books =
    // this.cartService.getCart();
    this.cartStore.items;

  removeFromCart(book: Book) {
    // this.cartService.removeFromCart(book);
    this.cartStore.removeFromCart(book);
  }
}
