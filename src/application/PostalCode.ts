import { IPostalCode } from "../entities/IPostalCode";

export class PostalCode implements IPostalCode{
    
    private _id: number = 0;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _code: number = 0;
    public get code(): number {
        return this._code;
    }
    public set code(value: number) {
        this._code = value;
    }
    private _city: string = "";
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }
    private _value: number = 0;
    public get value(): number {
        return this._value;
    }
    public set value(value: number) {
        this._value = value;
    }   
 
}