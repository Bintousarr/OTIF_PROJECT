import { Component, Input } from '@angular/core';
import { DataComponent } from './data-component';

@Component({
  selector: 'app-day5-child',
  standalone: true,
  imports: [],
  templateUrl: './day5-child.component.html',
  styleUrl: './day5-child.component.scss'
})
export class Day5ChildComponent {

  @Input() dataComponent!: DataComponent
}
