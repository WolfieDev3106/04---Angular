import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Personaje';

@Component({
  selector: 'op-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css',
})
export class ListaPersonajesComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public personajesLista: Character[] = [];

  deleteCharacter(id?:string):void{
    // TODO: Emitir el id del personaje

    if (!id) return;

    this.onDeleteCharacter.emit(id);

    // console.log(index);
  }
}
