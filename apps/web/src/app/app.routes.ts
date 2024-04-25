import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@nx-cleanarch-spotify/shell').then(m => m.ShellComponent)
  }
];
