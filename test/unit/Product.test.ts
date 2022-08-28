import Book from "../../src/domain/entity/Book";
import Product from "../../src/domain/entity/Product";

test('Create a product book and get dimension', ()=>{
    const book : Product = new Book();

    book.id = 1;
    book.name = 'book';
    book.weight = 15;
    book.width = 3;
    book.height = 3;
    book.length = 3;
    
    expect(book.getDimension()).toEqual(27);
});