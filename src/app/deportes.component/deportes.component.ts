import { Component } from '@angular/core';

@Component({
  selector: 'app-deportes',
  standalone: false,
  styleUrl: './deportes.component.css',
  templateUrl: './deportes.component.html',
})
export class DeportesComponent {
  public sports: Array<string>;
  public numbers: Array<number>
  constructor() {
    this.numbers = [1,2,3,4,5,6,7]
    this.sports = ['Canicas', 'Petanca', 'Curling', 'Futbol', 'dasda', 'dasdad'];
  }
}
