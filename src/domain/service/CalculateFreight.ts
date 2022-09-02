import Order from "../entity/Order";
import IPostalCodePriceRepository from "../repository/IPostalCodePriceRepository";

export default abstract class CalculateFreight{
    
    private _order : Order | any;
    private _postalCodePriceRepository : IPostalCodePriceRepository;

    constructor(order : Order, postalCodePriceRepository : IPostalCodePriceRepository){
        this._order = order;        
        this._postalCodePriceRepository = postalCodePriceRepository;
    }

    public calculate() : number{
        const totalWeight = this._order.getPriceByWeight();
        const totalVolume = this._order.getTotalVolume();
        const postalCode =  this._order.getCustomer().postalCode;
        
        if (totalWeight > totalVolume) {
            return this._postalCodePriceRepository.getPriceByWeight(postalCode, totalWeight);            
        }
        
        return this._postalCodePriceRepository.getPriceByVolume(postalCode, totalVolume);        
    }
}