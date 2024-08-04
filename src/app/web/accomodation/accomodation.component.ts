import { Component } from '@angular/core';
import { CompteAReboursComponent } from "../../compte-a-rebours/compte-a-rebours.component";



interface Team {
  rank: number;
  logo: string;
  name: string;
  wins: number;
  draws: number;
  losses: number;
  points: number;
}
@Component({
  selector: 'app-accomodation',
  standalone: true,
  imports: [CompteAReboursComponent],
  templateUrl: './accomodation.component.html',
  styleUrl: './accomodation.component.scss'
})
export class AccomodationComponent {

  teams: Team[] = [
    { rank: 1, logo: 'path/to/bethlehem.png', name: 'Bethlehem', wins: 22, draws: 4, losses: 2, points: 140 },
    { rank: 2, logo: 'path/to/charleston.png', name: 'Chrston Battery', wins: 19, draws: 3, losses: 5, points: 138 },
    { rank: 3, logo: 'path/to/charlotte.png', name: 'Charlotte', wins: 18, draws: 2, losses: 3, points: 130 },
    { rank: 4, logo: 'path/to/cincinnati.png', name: 'FC Cincinnati', wins: 17, draws: 1, losses: 2, points: 126 },
    { rank: 5, logo: 'path/to/indy-eleven.png', name: 'Indy Eleven', wins: 16, draws: 3, losses: 2, points: 110 },
    { rank: 6, logo: 'path/to/louisville.png', name: 'Louisville City FC', wins: 15, draws: 4, losses: 6, points: 108 },
  ];
}
