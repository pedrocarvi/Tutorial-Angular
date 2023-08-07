import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario_plantilla/formulario2.component';

// Formularios - enfoque plantilla
import { FormsModule } from '@angular/forms';

// Formularios - enfoque reactivo
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { ChildrenComponent } from './children/children.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    ImagenesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Formulario2Component,
    FormularioReactivoComponent,
    ChildrenComponent,
    AddMessagesComponent,
    ListMessagesComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
