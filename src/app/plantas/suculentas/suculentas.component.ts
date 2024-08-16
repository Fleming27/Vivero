import { Component } from '@angular/core';

@Component({
  selector: 'app-suculentas',
  templateUrl: './suculentas.component.html',
  styleUrls: ['./suculentas.component.css']
})
export class SuculentasComponent {
  
  public nombre: string = 'Echeveria';
  public tamanio: number = 10;
  public mostrarButton01: boolean = false;

  public changeNname(){
    this.nombre = 'Aeonius'
  }

  get displayTamanio(): string {
    return 'Tiene una tamaño de ' + this.tamanio;
  }

  public productos: string[] = ['Aeonius', 'Echeveria', 'Cactus'];

}



