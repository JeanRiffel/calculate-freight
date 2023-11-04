import sinon from 'sinon';
import TShirtProduct from '../../../src/domains/product/entity/TShirtProduct';
import TShirtProductFields from '../../../src/domains/product/entity/TShirtProductFields';

let key : string = '707545-5cdsf8-6s9789';
let getNewID = sinon.stub().resolves(key);

describe('Unit - Product ', ()=>{	
	test('Should create a tshirt product and get its volume', async ()=>{			
		const price = 55.00;
		const tshirtProductFields = new TShirtProductFields();
		tshirtProductFields.id = await getNewID();
		tshirtProductFields.description = 'Black TShirt to Developers';
		tshirtProductFields.length = 15;
		tshirtProductFields.width = 10;
		tshirtProductFields.weight = 5;
		tshirtProductFields.height = 20;
		tshirtProductFields.price = price;
		const tshirt = new TShirtProduct (tshirtProductFields);

		const volume = tshirt.getVolume();
		const tshirtPrice = tshirt.price;
		expect(volume).toBeGreaterThan(0);
		expect(tshirtPrice).toEqual(price)
	});

})
