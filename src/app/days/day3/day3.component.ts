import { Component } from '@angular/core';
import { Day3ChildComponent } from './day3-child/day3-child.component';
import { ProgramChild } from '../../program/program-child/program-child.component';
import { DataComponent } from './day3-child/data-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-day3',
  standalone: true,
  imports: [Day3ChildComponent, ProgramChild, RouterLink],
  templateUrl: './day3.component.html',
  styleUrl: './day3.component.scss'
})
export class Day3Component {
  dataComponent : DataComponent[] = [
    {
      photoUrl: '../../assets/dej.jpeg',
      date:'04, Dec-2024',
      hours:'09:00 - 10:00',
      label:'Ressources Naturelles',
      description:"Petit-déjeuner",
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
      photoUrl: '../../assets/agriculture.jpeg',
      date:'04, Dec-2024',
      hours:'10:00 - 12:00',
      label:'Ressources Naturelles',
      description:"Session 4: Solutions pour l'agriculture, l'eau et les fôrets",
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
      photoUrl: '../../assets/dejeuner_entreprise.jpg',
      date:'04, Dec-2024',
      hours:'12:15 - 14:00 ',
      label:'Ressources Naturelles',
      description:"Déjeuner",
      lieu:"Abidjan, Côte d'Ivoire",
      orateur:"",
      orateurs: [
        {
          name: 'ora',
          photoUrl: "../../assets/espace.png"
        }
      ]
    }, 
    {
      photoUrl: '../../assets/inondation.jpg',
      date:'04, Dec-2024',
      hours:'14:00 - 15:30',
      label:'Ressources Naturelles',
      description:"Session 5:  Solution spatiale pour les inondations",
      lieu:"Abidjan, Côte d'Ivoire",
      orateur:"",
      orateurs: [
        {
          name: 'ora',
          photoUrl: "../../assets/espace.png"
        }
      ]
    },
    {
      photoUrl: '../../assets/cafe.jpg',
      date:'04, Dec-2024',
      hours:'15:30 - 16:30',
      label:'Ressources Naturelles',
      description:"Pause café et Visite de stand",
      lieu:"Abidjan, Côte d'Ivoire",
      orateur:"",
      orateurs: [
        {
          name: 'ora',
          photoUrl: "../../assets/espace.png"
        }
      ]
    },
    {
      photoUrl: '../../assets/diner.jpeg',
      date:'04, Dec-2024',
      hours:'19:00 - 23:00',
      label:'Ressources Naturelles',
      description:"Dîner: Prix spatial annuel",
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
