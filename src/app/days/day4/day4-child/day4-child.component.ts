import { Component, Input } from '@angular/core';
import { DataComponent } from './data-component';



@Component({
  selector: 'app-day4-child',
  standalone: true,
  imports: [],
  templateUrl: './day4-child.component.html',
  styleUrl: './day4-child.component.scss'
})
export class Day4ChildComponent {

  @Input() dataComponent!: DataComponent
}
