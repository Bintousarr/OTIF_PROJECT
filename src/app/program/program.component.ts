import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { DataComponent } from './program-child/data-component';
import { ProgramChild } from './program-child/program-child.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, BannerComponent, FooterComponent, ProgramChild, RouterLink],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {

  dataComponent : DataComponent[] = [
    {
      photoUrl: '../../assets/donate.png',
      date:'02, Dec-2024',
      hours:'10:00 – 12:00 ',
      label:'ÉVÉNEMENT SOCIAL',
      description:"DON SOCIAL",
      lieu:"Abidjan, Côte d'Ivoire",
      orateur:"",
      orateurs: [
        {
          name: '',
          photoUrl: ""
        }
      ]
    },
    {
      photoUrl: '../../assets/conference.jpg',
      date:'02, Dec-2024',
      hours:'14:00 – 16:00 ',
      label:'ÉVÉNEMENT SOCIAL',
      description:"CONFERENCE DANS UNE ECOLE",
      lieu:"Abidjan, Côte d'Ivoire",
      orateur:"",
      orateurs: [
        {
          name: '',
          photoUrl: ""
        }
      ]
    },
    {
      photoUrl: '../../assets/club.jpg',
      date:'03, Dec-2024',
      hours:'16:00 – 17:30 ',
      label:'ÉVÉNEMENT SOCIAL',
      description:"REUNION POUR LE CLUB D'AFFAIRES",
      lieu:"Abidjan, Côte d'Ivoire",
      orateur:"",
      orateurs: [
        {
          name: 'ora',
          photoUrl: "../../assets/espace.png"
        }
      ]
    }
  ]
  
}
