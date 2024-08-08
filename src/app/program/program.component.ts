import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { DataComponent } from './program-child/data-component';
import { ProgramChild } from './program-child/program-child.component';
import { RouterLink } from '@angular/router';


import { CommonModule } from '@angular/common';

interface Event {
  time: string;
  type: string;
  speakerImg: string;
  speakerName: string;
  title: string;
  description: string;
}


interface Day {
  day: string;
  events: Event[];
}
@Component({
  selector: 'app-program',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, BannerComponent, FooterComponent, ProgramChild, RouterLink, CommonModule],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {

  days: Day[] = [
    {
      day: 'Premier Jour',
      events: [
        {
          time: '10:00 - 12:00',
          type: '02, Dec-2024',
          speakerImg: '../../../assets/don.png',
          speakerName: '',
          title: 'Don Social',
          description: "Cet atelier explore les dynamiques et stratégies de dons et de partage dans les communautés, mettant en lumière comment ces actes renforcent les liens sociaux et soutiennent les initiatives collectives."
        },
        {
          time: '14:00 - 16:00',
          type: '02, Dec-2024',
          speakerImg: '../../../assets/conference.jpg',
          speakerName: '',
          title: 'Conférence dans une école',
          description: "La conférence dans une école vise à inspirer et à informer les étudiants sur divers sujets, en fournissant des perspectives enrichissantes et des connaissances pratiques pour leur développement académique et personnel."
        },
        {
          time: '16:00 - 17:30',
          type: '02, Dec-2024',
          speakerImg: '../../../assets/club.jpg',
          speakerName: '',
          title: 'Réunion pour le club d\'affaires',
          description: "La réunion pour le club d'affaires offre une plateforme de discussion sur les tendances actuelles du marché, permettant aux membres de partager des idées, de créer des réseaux et de développer des stratégies pour le succès commercial."
        }

      ]
    },
    {
      day: 'Deuxième Jour',
      events: [
        {
          time: '10:00 - 12:00',
          type: '03, Dec-2024',
          speakerImg: '../../assets/parole.jpg',
          speakerName: '',
          title: 'Cérémonie d\'ouvertures et Ressources Naturelles',
          description: 'Prise de parole de quelques autorités et directeurs tels que Mr Tidiane OUATTARA, Professeur Sherif SEDKY, Mr Adama DIAWARA et M Irie Bi FABRICE'
        },
        {
          time: '14:00 - 15:30',
          type: '03, Dec-2024',
          speakerImg: '../../assets/dc4c97e654.jpeg',
          speakerName: '',
          title: 'Cérémonie d\'ouvertures et Ressources Naturelles',
          description: 'Session 1: Solution spatiale pour la gestion foncière. '
        },
        {
          time: '16:30 - 17:30',
          type: '03, Dec-2024',
          speakerImg: '../../assets/dc4c97e654.jpeg',
          speakerName: '',
          title: 'Cérémonie d\'ouvertures et Ressources Naturelles',
          description: 'Session 2: Solution spatiale pour la gestion foncière'
        },
       
      ]
    },
    {
      day: 'Troisième Jour',
      events: [
        {
          time: '10:00 - 12:00',
          type: '04, Dec-2024',
          speakerImg: '../../assets/agriculture.jpeg',
          speakerName: '',
          title: 'Ressources Naturelles',
          description: "Session 4: Solutions pour l'agriculture, l'eau et les fôrets"
        },
        {
          time: '14:00 - 15:30',
          type: '04, Dec-2024',
          speakerImg: '../../assets/inondation.jpg',
          speakerName: '',
          title: 'Ressources Naturelles',
          description: "Session 5:  Solution spatiale pour les inondations"
        },
        {
          time: '19:00 - 23:00',
          type: '04, Dec-2024',
          speakerImg: '../../assets/parole.jpg',
          speakerName: '',
          title: 'Ressources Naturelles',
          description: "Dîner: Prix spatial annuel"
        },
       
      ]
    },
    {
      day: 'Quatrième Jour',
      events: [
        {
          time: '10:00 - 12:00',
          type: '05, Dec-2024',
          speakerImg: '../../assets/agriculture.jpeg',
          speakerName: '',
          title: 'Sécurité & Défense',
          description: "Session 7: Solutions pour la sécurité et la défense"
        },
        {
          time: '14:00 - 15:30',
          type: '05, Dec-2024',
          speakerImg: '../../assets/maritime.png',
          speakerName: '',
          title: 'Sécurité & Défense',
          description: "Session 8:  Solution spatiale pour le maritime",
        },
        {
          time: '16:00 - 17:00',
          type: '05, Dec-2024',
          speakerImg: '../../assets/parole.jpg',
          speakerName: '',
          title: 'Sécurité & Défense',
          description: "Réservé au club d'affaires"
        },
       
      ]
    },
    {
      day: 'Cinquième Jour',
      events: [
        {
          time: '10:00 - 12:00',
          type: '06, Dec-2024',
          speakerImg: '../../assets/agriculture.jpeg',
          speakerName: '',
          title: 'CLÔTURE',
          description: 'Prise de parole de quelques autorités et directeurs tels que Mr Tidiane OUATTARA, Professeur Sherif SEDKY, Mr Adama DIAWARA et M Irie Bi FABRICE'
        },
        {
          time: '14:00 - 17:00',
          type: '06, Dec-2024',
          speakerImg: '../../assets/tourisme.png',
          speakerName: '',
          title: 'CLÔTURE',
          description: "Visite touristique"
        },
       
       
      ]
    },
  ];

  getBackgroundColor(day: string) {
    switch(day) {
      case 'Premier Jour':
        return 'bg-white'; 
      case 'Deuxième Jour':
      case 'Quatrième Jour':
        return 'bg-gray-100'; 
      case 'Troisième Jour':
      case 'Cinquième Jour':
        return 'bg-white'; 
      default:
        return '';
    }
  }

  /* events: Event[] = [
    {
      time: '10:00 - 12:00',
      type: 'Atelier',
      speakerImg: '../../../assets/donate.png',
      speakerName: '',
      title: 'Don Social',
      description: ''
    },
    {
      time: '14:00 - 16:00',
      type: 'Atelier',
      speakerImg: '../../../assets/donate.png',
      speakerName: '',
      title: 'Conférence dans une école',
      description: ''
    },
    {
      time: '16:00 - 17:30',
      type: 'Atelier',
      speakerImg: '../../../assets/donate.png',
      speakerName: '',
      title: 'Réunion pour le club d\'affaires',
      description: ''
    },


  ]; */
}
