import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { DataComponent } from './program-child/data-component';
import { ProgramChild } from './program-child/program-child.component';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, BannerComponent, FooterComponent, ProgramChild],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {

  dataComponent : DataComponent[] = [
    {
      photoUrl: '',
      date:'02, dec, 2024',
      hours:'',
      label:'',
      lieu:"",
      orateur:"",
      orateurs: [
        {
          name: '',
          photoUrl: ""
        }
      ]
    },
    {
      photoUrl: '',
      date:'03, dec , 2024',
      hours:'',
      label:'',
      lieu:"",
      orateur:"",
      orateurs: [
        {
          name: '',
          photoUrl: ""
        }
      ]
    }
  ]
  
}
