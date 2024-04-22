import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Personaje';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class OnePieceService {
  constructor() {}

  public characters: Character[] = [
    { id: uuid(), name: 'Luffy', reward: 250000 },
    { id: uuid(), name: 'Zoro', reward: 1500000 },
    { id: uuid(), name: 'Sanj', reward: 1200000 },
  ];
  addCharacter(character: Character): void {
    
    const newCharacter: Character = { id: uuid(), ...character};

    this.characters.push(newCharacter);

  }

  // onDeleteCharacter(index: number): void {
  //   this.personajes.splice(index, 1);
  // }

   deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
