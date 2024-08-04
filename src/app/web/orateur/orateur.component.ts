import { Component } from '@angular/core';
import { SponsorComponent } from "../../sponsor/sponsor.component";

@Component({
  selector: 'app-orateur',
  standalone: true,
  imports: [SponsorComponent],
  templateUrl: './orateur.component.html',
  styleUrl: './orateur.component.scss'
})
export class OrateurComponent {

  
}
