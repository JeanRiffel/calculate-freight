export abstract class VolumeAbstract {

    private _length : number = 0;
    private _width  : number = 0;
    private _height : number = 0;

    constructor ( length : number , width : number, height : number){
        this._length = length;
        this._width = width;
        this._height = height;
    }

    public getValue() : number{
        return ( this._length * this._width * this._height ); 
    }

}