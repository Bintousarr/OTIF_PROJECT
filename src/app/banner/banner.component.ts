import { Component } from '@angular/core';
import { CompteAReboursComponent } from "../compte-a-rebours/compte-a-rebours.component";
import { KeynoteSpeakerComponent } from "../keynote-speaker/keynote-speaker.component";
import { SponsorComponent } from '../sponsor/sponsor.component';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CompteAReboursComponent, KeynoteSpeakerComponent, SponsorComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  
})
export class BannerComponent {
  slides = [
    {
      conference: 'AFRICAN SPACE  SOLUTION MARKET',
      date: 'Du 02 décembre au 06 décembre 2024',
      location: 'Abidjan - Côte d’Ivoire',
      year: '2024',
      description: 'THEME : GESTION DES RESSOURCES NATURELLES ET CATASTROPHES',
      aboutText: 'A PROPOS',
      registerText: 'INSCRIVEZ-VOUS'
    },
    {
      conference: 'L\'espace n\'est pas une option, mais une nécessité. La technologie spatiale est fondamentale pour les pays africains.',
      year: '2024',
      description: 'THEME : GESTION DES RESSOURCES NATURELLES ET CATASTROPHES',
       aboutText: 'A PROPOS',
      registerText: 'INSCRIVEZ-VOUS'
    }
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
  }

}

 

