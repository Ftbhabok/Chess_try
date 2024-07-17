export  abstract class Piece{
    protected abstract _FENChar: FENChar;
    protected abstract _directions: coords[];

    constructor(private _color: color){}

    public get FENChar ():FENChar{
        return this._FENChar;
    }
    public get directions(): Coords[]{
        return this.directions;
    }

    public get color(): Color {
        return this._color;
    }
}