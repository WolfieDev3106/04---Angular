import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi primer proyecto en angular';
  public counter: number = 0;



  increaseBy(value: number):void {
  
    this.counter = this.counter += value;
  }
  
  reset(){
    this.counter = 0;
    
  }

}
