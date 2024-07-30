import { Component } from '@angular/core';
import { Day2ChildComponent } from './day2-child/day2-child.component';
import { ProgramChild } from "../../program/program-child/program-child.component";


@Component({
  selector: 'app-day2',
  standalone: true,
  imports: [Day2ChildComponent, ProgramChild],
  templateUrl: './day2.component.html',
  styleUrl: './day2.component.scss'
})
export class Day2Component {
dataComponent: any;

}
