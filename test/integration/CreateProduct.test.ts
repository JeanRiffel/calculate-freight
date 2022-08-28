import ProductInput from "../../src/application/dto/ProductInput";
import CreateProduct from "../../src/application/usecase/CreateProduct";
import IProductRespository from "../../src/domain/repository/IProductRepository";
import ProductRespositoryMemory from "../../src/infra/respository/memoryDB/ProductRespositoryMemory";

test('Create product ', ()=>{
    const productInput = new ProductInput()
    productInput.uuid = '';
    productInput.description = 'phone';
    productInput.height = 15;
    productInput.length = 12;
    productInput.weight = 20;
    productInput.width = 16;
    productInput.price = 860.45;

    const abstractProductRepository : IProductRespository = new ProductRespositoryMemory();

    const createProduct = new CreateProduct(abstractProductRepository);
    createProduct.add(productInput);    

    const listProducts = createProduct.getListProducts();
    expect(listProducts.length).toEqual(2);
});