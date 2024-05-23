import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Book } from '@office/books';
import { computed } from '@angular/core';

type CartState = {
  items: Book[];
};

const initialState: CartState = {
  items: [],
};

export const CartStore =
  signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withComputed(({ items }) => ({
      numberOfItemsInCart: computed(() => items().length),
    })),
    withMethods((store) => ({
      addToCart(book: Book): void {
        patchState(store, (state) => ({ items: [...state.items, book] }));
      },
      removeFromCart(book: Book): void {
        patchState(store, (state) => ({ items: state.items.filter(b => b.id !== book.id
          ) }));
      },
    }))
);
