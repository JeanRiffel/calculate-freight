import { ItemInterface } from "../../domain/entity/ItemInterface";

export class Item  implements ItemInterface {

    constructor(){}

    private _id: number = 0;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _description: string = "";
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    private _weight: number = 0;
    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }
    private _length: number = 0;
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }
    private _width: number = 0;
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    private _height: number = 0;
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }


}