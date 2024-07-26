import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ChessBoardComponent } from './modules/chess-board/chess-board.component';


@NgModule({
  declarations: [ChessBoardComponent],
  imports: [NgModule],
  exports: [ChessBoardComponent]
})
export class ChessBoardModule { }
export class AppModule { }



// the f did i do here uffs