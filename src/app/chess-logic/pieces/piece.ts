
import {color, Coords, FENChar } from "../models";

export  abstract class Piece{
    protected abstract _FENChar: FENChar;
    protected abstract _directions: Coords[];

    constructor(private _color: color){}

    public get FENChar ():FENChar{
        return this._FENChar;
    }
    public get directions(): Coords[]{
        return this.directions;
    }

    public get color(): color {
        return this._color;
    }
}
