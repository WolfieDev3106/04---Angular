import { Component } from '@angular/core';
import { OnePieceService } from '../services/onePiece.service';
import { Character } from '../interfaces/Personaje';

@Component({
  selector: 'app-one-piece-main-page',
  templateUrl: './main-page.component.html',
})
export class OnePieceMainComponent {

  constructor( private opService: OnePieceService ){}

  get characters(): Character[] {
    return [...this.opService.characters];
  }

  onDeleteCharacter(id:string):void{

    this.opService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character):void{
    this.opService.addCharacter(character);
  }
}
