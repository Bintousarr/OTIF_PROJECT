import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgramChild } from '../../program/program-child/program-child.component';
import { DataComponent } from './day4-child/data-component';
import { CompteAReboursComponent } from "../../compte-a-rebours/compte-a-rebours.component";


@Component({
  selector: 'app-day4',
  standalone: true,
  imports: [Day4Component, ProgramChild, RouterLink, CompteAReboursComponent],
  templateUrl: './day4.component.html',
  styleUrl: './day4.component.scss'
})
export class Day4Component {

  dataComponent : DataComponent[] = [
    {
      photoUrl: '../../assets/dej.jpeg',
      date:'05, Dec-2024',
      hours:'09:00 - 10:00',
      label:'Sécurité & Défense',
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
      photoUrl: '../../assets/defense.png',
      date:'05, Dec-2024',
      hours:'10:00 - 12:00',
      label:'Sécurité & Défense',
      description:"Session 7: Solutions pour la sécurité et la défense",
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
      date:'05, Dec-2024',
      hours:'12:15 - 14:00 ',
      label:'Sécurité & Défense',
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
      photoUrl: '../../assets/maritime.png',
      date:'05, Dec-2024',
      hours:'14:00 - 15:00',
      label:'Sécurité & Défense',
      description:"Session 8:  Solution spatiale pour le maritime",
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
      date:'05, Dec-2024',
      hours:'15:00 - 16:00',
      label:'Sécurité & Défense',
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
      photoUrl: '../../assets/affaire.jpg',
      date:'05, Dec-2024',
      hours:'16:00 - 17:00',
      label:'Sécurité & Défense',
      description:"Réservé au club d'affaires",
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
