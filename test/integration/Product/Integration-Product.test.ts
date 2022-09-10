import ProductInput from "../../../src/application/dto/product/ProductInput";
import CreateProduct from "../../../src/application/usecase/product/CreateProduct";
import DatabaseConnectionAdapter from "../../../src/infra/database/DatabaseConnectionAdapter";
import DatabaseRepositoryFactory from "../../../src/infra/factory/DatabaseRepositoryFactory";

test('Create Product', async()=>{
    const connection = DatabaseConnectionAdapter.getInstance();
    const databaseRepositoryFactory = new DatabaseRepositoryFactory(connection);

    const productInput = new ProductInput(
        '', 'Mobile Phone', 10, 10.5, 8.9, 5.6, 100.50
    );

    const createProduct = new CreateProduct(databaseRepositoryFactory);
    const created = await createProduct.execute(productInput);
    expect(created).toBeTruthy();
});