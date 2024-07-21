import { FENChar } from "src/app/chess-logic/models"

type SquareWithPiece = {
   piece: FENChar;
   x: number;
   y: number;
 }
   type SquareWithoutPieces = {
     piece: null;
   }
export type Square = SquareWithPiece | SquareWithoutPieces;
