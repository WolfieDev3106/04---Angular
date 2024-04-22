import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Personaje';

@Component({
  selector: 'op-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
  styleUrl: './agregar-personajes.component.css',
})
export class AgregarPersonajesComponent { 

  @Output()
 public onNuevoPersonaje: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    reward: 0
  }
  
  agregaPersonaje():void{

    // debugger;


    if (this.character.name.length == 0) return;

    this.onNuevoPersonaje.emit(this.character);


    this.character = { name: '', reward: 0};

  }
}
