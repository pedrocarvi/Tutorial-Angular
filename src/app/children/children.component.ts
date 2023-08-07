// El input sirve para la comunicacion entre componentes padre-hijo
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent {
  @Input() valorAPasar?: string;

  @Output() valorChange = new EventEmitter<string>();

  emitTitleChange() {
    this.valorChange.emit(this.valorAPasar);
  }
}
