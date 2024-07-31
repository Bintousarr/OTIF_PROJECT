import { Component } from '@angular/core';
import { Day2ChildComponent } from './day2-child/day2-child.component';
import { ProgramChild } from "../../program/program-child/program-child.component";
import { DataComponent } from './day2-child/data-component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-day2',
  standalone: true,
  imports: [Day2ChildComponent, ProgramChild, RouterLink],
  templateUrl: './day2.component.html',
  styleUrl: './day2.component.scss'
})
export class Day2Component {
  dataComponent : DataComponent[] = [
    {
      photoUrl: '../../assets/dej.jpeg',
      date:'03, Dec-2024',
      hours:'09:00 - 10:00',
      label:'Cérémonie d\'ouvertures et Ressources Naturelles',
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
      photoUrl: '../../assets/parole.jpg',
      date:'03, Dec-2024',
      hours:'10:00 - 12:00',
      label:'Cérémonie d\'ouvertures et Ressources Naturelles',
      description:"Prise de parole de quelques autorités et directeurs",
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
      date:'03, Dec-2024',
      hours:'12:15 - 14:00 ',
      label:'Cérémonie d\'ouvertures et Ressources Naturelles',
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
      photoUrl: '../../assets/ges_fonciere.jpg',
      date:'03, Dec-2024',
      hours:'14:00 - 15:30',
      label:'Cérémonie d\'ouvertures et Ressources Naturelles',
      description:"Session 1: Solution spatiale pour la gestion foncière",
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
      photoUrl: '../../assets/stand.jpg',
      date:'03, Dec-2024',
      hours:'15:30 - 16:30',
      label:'Cérémonie d\'ouvertures et Ressources Naturelles',
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
      photoUrl: '../../assets/ges_fonciere.jpg',
      date:'03, Dec-2024',
      hours:'16:30 - 17:30',
      label:'Cérémonie d\'ouvertures et Ressources Naturelles',
      description:"Session 2: Solution spatiale pour la gestion foncière",
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
