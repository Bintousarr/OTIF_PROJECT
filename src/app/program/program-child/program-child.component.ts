import { Component, Input } from "@angular/core";
import { DataComponent } from "./data-component";

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [],
    templateUrl: './program-child.html',
    styleUrl: './program.child.scss' 

})
export class ProgramChild{
    @Input() dataComponent!: DataComponent

}