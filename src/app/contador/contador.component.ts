import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  numero: number = 10;

  decrementar() {
    if (this.numero > 0) {
      this.numero--;
    } else {
      this.numero == 0;
    }
  }

  incrementar() {
    this.numero++;
  }
}
