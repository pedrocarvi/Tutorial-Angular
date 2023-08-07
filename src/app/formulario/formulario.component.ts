import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  openAlert: boolean = false;
  mostrar_en_consola(input_name: string) {
    console.log(input_name);
    this.openAlert = true;
  }
  texto: string = '';
}
