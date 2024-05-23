import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '@office/cart-state';
import { AuthStateService } from '@office/auth-state';
import { combineLatest, map } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {


  cartService = inject(CartService);
  authState = inject(AuthStateService);

  numberOfItemsInCart$ =
    this.cartService.getNumberOfItemsInCart();

  // user$ = this.authState.getUser();
  user = this.authState.getUser();

  numberOfItemsInCart = this.cartService.getNumberOfItemsInCart();

//   viewObs$ =
//     combineLatest([this.user$, this.numberOfItemsInCart$])
//       .pipe(map(([user, numberOfItemsInCart]) => ({
//         user,
//         numberOfItemsInCart
// })));


}
