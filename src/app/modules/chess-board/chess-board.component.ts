import { Component } from '@angular/core';

@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css'
})
  
export class ChessBoardComponent {
private chessBoard = new ChessBoard();
  public chessBoardvie: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  
  public get playerColor(): Color {
    return this.chessBoard.playerColor; };

}
