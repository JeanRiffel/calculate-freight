export default interface IPostalCodePriceRepository{
    getPriceByWeight(postalCode : number, weight : number) : number;
    getPriceByVolume(postalCode : number, volume : number) : number;
}