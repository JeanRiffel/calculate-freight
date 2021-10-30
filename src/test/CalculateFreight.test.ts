import { CalculateFreight } from "../CalculateFreight";
import { CalculateFreightFactory } from "../CalculateFreightFactory";
import { CalculationFactor } from "../CalculationFactor";
import { Item } from "../Item";
import { PostalCodeDestination } from "../PostalCodeDestination";
import { Volume } from "../Volume";
import { WeightVolume } from "../WeightVolume";

test('Whether Postal Code Destination exists is expect to be greater than 0 ', ()=>{
    const postalCodeDestination = new PostalCodeDestination(89878856);
    expect(postalCodeDestination.getValue()).toBeGreaterThan(0);    
})

test('Whether Postal Code Destination not existis is expect to be equal 0 ', ()=>{
    const postalCodeDestination = new PostalCodeDestination(77777777);
    expect(postalCodeDestination.getValue()).toEqual(0);    
})

test('Volume is expect to be greater than 0 ', ()=>{
    const item = new Item();
    item.description = "tshirt";
    item.weight = 19.87;
    item.length = 18;
    item.width  = 13.5;
    item.height = 9;
    const volume = new Volume(item);
    expect( volume.getValue() ).toBeGreaterThan(0);
});

test('Calculate freight ', ()=>{
    const item = new Item();
    item.description = "tshirt";
    item.weight = 19.87;
    item.length = 18;
    item.width  = 13.5;
    item.height = 9;    
    
    const calculateFreightFactory = new CalculateFreightFactory();
    const calculateFreight = calculateFreightFactory.createCalculateFreight(item,  89878856);
    const valueFreight     = calculateFreight.getValue();
    expect(valueFreight).toBeGreaterThan(0);
});