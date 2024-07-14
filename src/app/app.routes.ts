import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadComponent: () =>
        import('./main-application/components/home/home.component').then((x) => x.HomeComponent)
      },
      {
        path: '**'
       
      }
];
