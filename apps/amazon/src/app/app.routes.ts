import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@office/auth')
        .then(c => c.AuthComponent)
  },
  {
    path: 'feed',
    loadComponent: () =>
      import('@office/feed')
      .then(c => c.FeedComponent)
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('@office/cart')
        .then(c=>c.CartComponent)
  }
];
