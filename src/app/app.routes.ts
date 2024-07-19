import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadComponent: () =>
        import('./main-application/components/home/home.component').then((x) => x.HomeComponent),
      children:[{
        path: 'program', loadComponent: () => 
          import('./program/program.component').then((c) => c.ProgramComponent),
      },
      {
        path: 'day-2', loadComponent: () => 
          import('./program-day/day-2/day-2.component').then((c) => c.Day2Component)
      },
      {
        path: 'home', loadComponent: () => 
          import('./banner/banner.component').then((c) => c.BannerComponent)
      }
    ],
      },
      {
        path: '**', redirectTo:'',pathMatch:'full'
       
      }
];
