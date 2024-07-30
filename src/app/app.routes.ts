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
        path: 'day2', loadComponent: () => 
          import('./days/day2/day2.component').then((c) => c.Day2Component)
      },      
      {
        path: 'sponsor-page', loadComponent: () => 
          import('./web/sponsor-page/sponsor-page.component').then((c) => c.SponsorPageComponent)
      },
      {
        path: 'orateur', loadComponent: () => 
          import('./web/orateur/orateur.component').then((c) => c.OrateurComponent)
      },
      {
        path: 'banner', loadComponent: () => 
          import('./banner/banner.component').then((c) => c.BannerComponent)
      },
      {
        path: 'contact', loadComponent: () => 
          import('./web/contact/contact.component').then((c) => c.ContactComponent)
      }
    ],
      },
      {
        path: '**', redirectTo:'home/banner',pathMatch:'full'
       
      }
];
