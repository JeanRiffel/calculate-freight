export abstract class  CalculateFreightAbstract{

    private _postalCodeValue : number = 0;
    private _orderWeight      : number = 0;
    private _orderVolumeWeight    : number = 0;

    constructor(orderWeight : number, orderVolumeWeight : number, postalCodeValue : number ){
        this._orderWeight       = orderWeight;
        this._orderVolumeWeight = orderVolumeWeight;
        this._postalCodeValue   = postalCodeValue;
    }

    private isItemWeightGreaterThenVolumeWeight() : boolean{
        return  this._orderWeight > this._orderVolumeWeight;
    }

    public getValue() : number{
        if (this.isItemWeightGreaterThenVolumeWeight() ){
            return ( this._orderWeight * this._postalCodeValue );
        }        
        return ( this._orderVolumeWeight * this._postalCodeValue );
    }
}