import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { BannerComponent } from "../banner/banner.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, BannerComponent, FooterComponent],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {

  
}
