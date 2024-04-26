import { Route } from '@angular/router';

export const shellRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@nx-cleanarch-spotify/home').then((m) => m.HomeComponent),
  },
  {
    path: 'collections',
    loadComponent: () =>
      import('@nx-cleanarch-spotify/collection').then(
        (m) => m.CollectionComponent
      ),
  }
];
