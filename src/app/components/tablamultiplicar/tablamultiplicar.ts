import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  styleUrl: './tablamultiplicar.css',
  templateUrl: './tablamultiplicar.html',
})
export class Tablamultiplicar {
  public total : number
  @ViewChild('numeromultiplicar') num : ElementRef
  public tabla1 : number[] = []
  public numeroElegido : number
  public tabla2 : number[] = []


  constructor(){
    this.total = 0
    this.num = new ElementRef(0)
    this.numeroElegido = 0
  }

  calcularTabla(){
    let numer_elegido = this.num.nativeElement.value
    for(let i = 1 ; i<=10; i++){
      this.total = numer_elegido * i
      this.tabla1.push(this.total)
    }
  }

  crearTabla2(){
    for(let i = 1 ; i<=10; i++){
      this.total = this.numeroElegido * i
      this.tabla2.push(this.total)
    }
  }
}
