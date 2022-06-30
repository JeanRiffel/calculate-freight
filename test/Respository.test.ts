import Repository from "../src/Repository";
import RepositoryMemory from "../src/RepositoryMemory";

test('Getting right postalcode', ()=>{

    let repository : Repository;

    repository = new RepositoryMemory();

    const ceps = repository.getByPostalCode(89130000);    
    expect(ceps.length).toEqual(1);

});