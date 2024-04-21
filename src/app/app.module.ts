import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListComponent } from './heroes/list/list.component';
import { OnepieceModule } from './onepiece/onepiece.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    OnepieceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


