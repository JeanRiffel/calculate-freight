import Address from "../../src/usecase/Address";
import Book from "../../src/domain/entity/Book";
import Order from "../../src/domain/entity/Order";
import Product from "../../src/domain/entity/Product";
import SimulateFreight from "../../src/domain/service/SimulateFreight";


test('Simulate Freight ', ()=>{
    const book : Product = new Book();
    book.id = 1;
    book.name = 'book';
    book.weight = 15;
    book.width = 3;
    book.height = 3;
    book.length = 3;

    const deliveryAddress = new Address();
    deliveryAddress.postalCode = 89130000;
    deliveryAddress.street = 'Street dreams';
    deliveryAddress.city = 'Orlando';

    const order = new Order( deliveryAddress);
    order.addProduct(book)
    
    const simulateFreight = new SimulateFreight();
    const freight = simulateFreight.
                    calculate(order);
    
    order.setFreight(freight);
});