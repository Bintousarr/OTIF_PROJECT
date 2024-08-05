import { Component } from '@angular/core';
import { DataComponent } from './day5-child/data-component';
import { ProgramChild } from "../../program/program-child/program-child.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-day5',
  standalone: true,
  imports: [Day5Component, ProgramChild, RouterLink],
  templateUrl: './day5.component.html',
  styleUrl: './day5.component.scss'
})
export class Day5Component {

  
  dataComponent : DataComponent[] = [
  
    {
      photoUrl: '../../assets/parole.jpg',
      date:'05, Dec-2024',
      hours:'10:00 - 12:00',
      label:'Clôture',
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
      photoUrl: '../../assets/tourisme.png',
      date:'05, Dec-2024',
      hours:'14:00 - 17:00',
      label:'Clôture',
      description:"Visite touristique",
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
