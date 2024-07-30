import { Component, Input } from '@angular/core';
import { DataComponent } from "./data-component";

@Component({
  selector: 'app-day2-child',
  standalone: true,
  imports: [],
  templateUrl: './day2-child.component.html',
  styleUrl: './day2-child.component.scss'
})
export class Day2ChildComponent {
  @Input() dataComponent!: DataComponent

}
