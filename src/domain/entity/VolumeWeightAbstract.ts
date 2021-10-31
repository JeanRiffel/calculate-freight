export abstract class VolumeWeightAbstract {

    private _volumeSize : number = 0;
    private _factorFreightValue : number = 0;

    constructor( readonly volumeSize : number, factorFreightValue : number  ){
        this._volumeSize = volumeSize;
        this._factorFreightValue = factorFreightValue;
    }

    getWeight() : number{
        return ( this._volumeSize / this._factorFreightValue );
    }

}