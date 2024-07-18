import { Component, OnDestroy, OnInit } from '@angular/core';

import { ChessBoard } from 'src/app/chess-logic/chess-board';

import { Color, Coords, FENChar} from 'src/app/chess-logic/models';




@Component({
  selector: 'app-chess-board',
  // standalone: true,
  // imports: [],
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
  
  
export class ChessBoardComponent {
private chessBoard = new ChessBoard();
  
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  
  public get playerColor(): Color {
    return this.chessBoard.playerColor; };

}

// problem is in this file  
// problem resolved

