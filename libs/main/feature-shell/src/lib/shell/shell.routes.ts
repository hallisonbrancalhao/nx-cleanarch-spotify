import { Route } from '@angular/router';

export const shellRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@nx-cleanarch-spotify/home').then(m => m.HomeComponent)
  }
];
