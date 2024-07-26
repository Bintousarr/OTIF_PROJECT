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
        path: 'day-3', loadComponent: () => 
          import('./program-day/day-3/day-3.component').then((c) => c.Day3Component)
      },
      {
        path: 'day-4', loadComponent: () => 
          import('./program-day/day-4/day-4.component').then((c) => c.Day4Component)
      },
      {
        path: 'day-5', loadComponent: () => 
          import('./program-day/day-5/day-5.component').then((c) => c.Day5Component)
      },
      {
        path: 'sponsor-page', loadComponent: () => 
          import('./web/sponsor-page/sponsor-page.component').then((c) => c.SponsorPageComponent)
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
