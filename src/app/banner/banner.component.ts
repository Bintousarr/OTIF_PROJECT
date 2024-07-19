import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
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
      description: 'Thème : Gestion des ressources naturelles et catastrophes',
      aboutText: 'ABOUT OTIF',
      registerText: 'REGISTER HERE'
    },
    {
      conference: 'AFRICAN SPACE  SOLUTION MARKET',
      date: 'Du 02 décembre au 06 décembre 2024',
      location: 'Abidjan - Côte d’Ivoire',
      year: '2024',
      description: 'Thème : Gestion des ressources naturelles et catastrophes',
      aboutText: 'ABOUT OTIF',
      registerText: 'REGISTER HERE'
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

 

