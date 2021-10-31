import { PostalCodeRepositoryMemory } from "../../src/infra/respository/memory/PostalCodeRepositoryMemory";

test('Postal Code Repository Memory expect to be greater than 0' ,  ()=>{
    const postalCodeRespositoryMemory = new PostalCodeRepositoryMemory();
    const postalCode = postalCodeRespositoryMemory.findByPostalCode(85497856);
    expect(postalCode.value).toBeGreaterThan(0);
} )

test('Postal Code Repository Memory expect thrown error' ,  ()=>{
    expect(
        ()=>{
            const postalCodeRespositoryMemory = new PostalCodeRepositoryMemory();    
            postalCodeRespositoryMemory.findByPostalCode(9999999999);
        }
    ).toThrow('Postal code not found');
} )