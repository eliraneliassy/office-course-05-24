import { Injectable } from '@angular/core';
import { Book } from '@office/books';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items$ = new BehaviorSubject<Book[]>([]);

  getCart(): Observable<Book[]>{
    return this.items$.asObservable();
  }

  addToCart(book: Book) {
    // this.items$ = [...this.items$, book];
    let currentCart = this.items$.value;
    currentCart = [...currentCart, book];
    this.items$.next(currentCart);

  }

  removeFromCart(book: Book) {
    // this.items = this.items.filter(b => b.id !== book.id);
    let currentCart = this.items$.value;
    currentCart = currentCart.filter(b => b.id !== book.id);
    this.items$.next(currentCart);
  }

  getNumberOfItemsInCart(): Observable<number> {
    return this.getCart().pipe(
      map((cart: Book[]) => cart.length)
    )
  }


}
