import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { ROUTES } from '@angular/router';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
        provide: ROUTES,
        multi: true,
        useValue: [
            {
                path: '',
                loadComponent: () => import('@nx-cleanarch-spotify/shell').then(m => m.ShellComponent),
                loadChildren: () => import('@nx-cleanarch-spotify/shell').then(m => m.shellRoutes)
            }
        ]
    }
]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
