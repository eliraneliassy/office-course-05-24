import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Book } from '@office/books';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // private items$ = new BehaviorSubject<Book[]>([]);
  private items: WritableSignal<Book[]> = signal([])

  getCart(): Signal<Book[]>{
    // return this.items$.asObservable();
    return this.items.asReadonly();
  }

  addToCart(book: Book) {
    // this.items$ = [...this.items$, book];
    this.items.update((currentValue) =>
    [...currentValue, book])
    // let currentCart = this.items$.value;
    // currentCart = [...currentCart, book];
    // this.items$.next(currentCart);

  }

  removeFromCart(book: Book) {
    // this.items = this.items.filter(b => b.id !== book.id);
    // let currentCart = this.items$.value;
    // currentCart = currentCart.filter(b => b.id !== book.id);
    // this.items$.next(currentCart);
    this.items.update((currentValue) =>
      currentValue.filter((b => b.id !== book.id)))
  }

  getNumberOfItemsInCart(): Signal<number> {
    // return this.getCart().pipe(
    //   map((cart: Book[]) => cart.length)
    // )

    return computed(() => this.items().length);
  }


}
