import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'home',
      loadComponent: () =>
        import('./main-application/components/home/home.component').then((x) => x.HomeComponent),
      children:[{
        path: 'program', loadComponent: () => 
          import('./program/program.component').then((c) => c.ProgramComponent),
      },
      
      {
        path: 'sponsor-page', loadComponent: () => 
          import('./web/sponsor-page/sponsor-page.component').then((c) => c.SponsorPageComponent)
      },
      {
        path: 'banner', loadComponent: () => 
          import('./banner/banner.component').then((c) => c.BannerComponent)
      }
    ],
      },
      {
        path: '**', redirectTo:'home/banner',pathMatch:'full'
       
      }
];
