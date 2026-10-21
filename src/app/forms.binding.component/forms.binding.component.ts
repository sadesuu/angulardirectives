import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-binding-component',
  standalone: false,
  styleUrl: './forms.binding.component.css',
  templateUrl: './forms.binding.component.html',
})
export class FormsBindingComponent {
  public user: any;
  public msg: string;

  constructor() {
    this.msg = '';
    this.user = {
      nombre: '',
      apellidos: '',
      edad: 0,
    };
  }
  recibirDatos(): void {
    this.msg = 'Datos recibidos.';
  }
}
