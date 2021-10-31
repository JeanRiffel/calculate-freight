export abstract class  CalculateFreightAbstract{

    private _postalCodeValue : number = 0;
    private _itemWeight      : number = 0;
    private _volumeWeight    : number = 0;

    constructor(itemWeight : number, volumeWeight : number, postalCodeValue : number ){
        this._itemWeight = itemWeight;
        this._volumeWeight = volumeWeight;
        this._postalCodeValue = postalCodeValue;
    }

    private isItemWeightGreaterThenVolumeWeight() : boolean{
        return  this._itemWeight > this._volumeWeight;
    }

    public getValue() : number{
        if (this.isItemWeightGreaterThenVolumeWeight() ){
            return ( this._itemWeight * this._postalCodeValue );
        }        
        return ( this._volumeWeight * this._postalCodeValue );
    }
}