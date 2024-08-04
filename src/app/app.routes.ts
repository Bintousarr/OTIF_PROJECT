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
        path: 'day3', loadComponent: () => 
          import('./days/day3/day3.component').then((c) => c.Day3Component)
      },     
      {
        path: 'day4', loadComponent: () => 
          import('./days/day4/day4.component').then((c) => c.Day4Component)
      },     
      {
        path: 'day5', loadComponent: () => 
          import('./days/day5/day5.component').then((c) => c.Day5Component)
      }, 
      {
        path: 'sponsor-page', loadComponent: () => 
          import('./web/sponsor-page/sponsor-page.component').then((c) => c.SponsorPageComponent)
      },      
      {
        path: 'register', loadComponent: () => 
          import('./web/register/register.component').then((c) => c.RegisterComponent)
      },
      {
        path: 'orateur', loadComponent: () => 
          import('./web/orateur/orateur.component').then((c) => c.OrateurComponent)
      },
      {
        path: 'about', loadComponent: () => 
          import('./web/about/about.component').then((c) => c.AboutComponent)
      },
      {
        path: 'accomodation', loadComponent: () => 
          import('./web/accomodation/accomodation.component').then((c) => c.AccomodationComponent)
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
