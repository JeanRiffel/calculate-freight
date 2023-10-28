import ProductInput from "../../../src/application/dto/product/ProductInput";
import CreateProduct from "../../../src/application/usecase/product/CreateProduct";
import RetrieveAllProduct from "../../../src/application/usecase/product/RetrieveAllProduct";
import DataBaseConnectionMemory from "../../../src/infra/database/memory/DataBaseConnectionMemory";
import ProductDatabaseRepositoryFactory from "../../../src/infra/factory/memory/ProductDatabaseRepositoryFactory";

describe('Integration - Product', ()=>{

  const memoryDatabase = DataBaseConnectionMemory.getInstance();
  const repository = new ProductDatabaseRepositoryFactory(memoryDatabase);

  test('Creating an Product Use Case', async ()=>{
    const productInput = new ProductInput()
    productInput.id = '';
    productInput.description = 'The black Tshirt';
    productInput.height = 10;
    productInput.length = 20;
    productInput.price = 60.00;
    productInput.weight = 5;
    productInput.width = 15;
    productInput.productType = 1;    
    
    const productUseCase = new CreateProduct(repository);
    const isCreated = await productUseCase.execute(productInput);

    expect(isCreated).toBeTruthy()
  });

  test('Creating an Product and Retrieving it', async ()=>{  
    const retrieveProductUseCase = new RetrieveAllProduct(repository)
    const listProducts = await retrieveProductUseCase.execute();
    expect(listProducts.length).toBeGreaterThan(0)
  });

})