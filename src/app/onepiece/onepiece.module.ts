import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnePieceMainComponent } from './pages/main-page.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { AgregarPersonajesComponent } from './components/agregar-personajes/agregar-personajes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OnePieceMainComponent,
    ListaPersonajesComponent,
    AgregarPersonajesComponent
  ],
  exports: [
    OnePieceMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class OnepieceModule { }
