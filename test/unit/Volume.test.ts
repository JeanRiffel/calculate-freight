import { Item } from "../../src/application/usecase/Item";
import { Volume } from "../../src/application/usecase/Volume";


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
