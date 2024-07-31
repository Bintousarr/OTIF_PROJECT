import { Component, Input } from '@angular/core';
import { DataComponent } from './data-component';

@Component({
  selector: 'app-day3-child',
  standalone: true,
  imports: [],
  templateUrl: './day3-child.component.html',
  styleUrl: './day3-child.component.scss'
})
export class Day3ChildComponent {
  @Input() dataComponent!: DataComponent
}
