import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'bookatable',
    loadChildren: () => import('bookatable/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'backoffice',
    loadChildren: () => import('backoffice/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
