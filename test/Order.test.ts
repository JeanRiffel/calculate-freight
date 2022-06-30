import Address from "../src/Address";
import Book from "../src/Book";
import Order from "../src/Order";
import Product from "../src/Product";
let book : Product;
let deliveryAddress : Address;

beforeAll( ()=>{
    book = new Book();
    book.id = 1;
    book.name = 'book';
    book.weight = 15;
    book.width = 3;
    book.height = 3;
    book.length = 3;
    book.price = 5;

    deliveryAddress = new Address();
    deliveryAddress.postalCode = 89130000;
    deliveryAddress.street = 'Street dreams';
    deliveryAddress.city = 'Orlando';


} );

test('Creating order', ()=>{
    const order = new Order(deliveryAddress);
    order.addProduct(book);
    expect(order.getProducts()).toContain( book );
});

test('Total order should be 5', ()=>{
    const order = new Order(deliveryAddress);
    order.addProduct(book);
    expect(order.getTotal()).toEqual(5);
});