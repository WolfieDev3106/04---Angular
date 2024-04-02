import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  standalone: false,
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public nombre: string = 'luffy';
  public edad: number = 17;

  get capitalizarNombre(): string {
    return this.nombre.toLocaleUpperCase();
  }

  getHeroeDescription(): string {
    return this.nombre + ' - ' + this.edad;
  }

  changeHero(): void {
    this.nombre = 'Zoro'
  }

  changeEdad(): void {
    this.edad = 18;
  }

  reset():void{
    this.nombre = 'luffy';
    this.edad = 17;
  }
}
