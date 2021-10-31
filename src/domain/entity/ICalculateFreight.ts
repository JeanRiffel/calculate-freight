export abstract class  ICalculateFreight{

    private _postalCodeValue : number = 0;
    private _itemWeight      : number = 0;
    private _volumeWeight    : number = 0;

    constructor(itemWeight : number, volumeWeight : number, postalCodeValue : number ){
        this._itemWeight = itemWeight;
        this._volumeWeight = volumeWeight;
        this._postalCodeValue = postalCodeValue;
    }

    private isItemWeightGreaterThenWeightVolume() : boolean{
        return  this._itemWeight > this._volumeWeight;
    }

    public getValue() : number{
        if (this.isItemWeightGreaterThenWeightVolume() ){
            return ( this._itemWeight * this._postalCodeValue );
        }        
        return ( this._volumeWeight * this._postalCodeValue );
    }
}