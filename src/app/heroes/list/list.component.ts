import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public mugiwarasNombres: string[] = ['Luffy', 'Zoro', 'Nami', 'Sanji', 'Ussop'];
  public mugiwaraEliminado?: string;
  
  eliminaMugiwara():void {
    this.mugiwaraEliminado = this.mugiwarasNombres.pop();
    console.log("🚀 ~ ListComponent ~ eliminaMugiwara ~ mugiwaraEliminado:", this.mugiwaraEliminado)
    
   
  }
  

}
