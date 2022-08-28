import Repository from "../../domain/repository/Repository";

export default class RepositoryMemory implements Repository{
    
    private postalCodeTable = [
        {id:1, originPostalCode: 89000000, destinationPostalCode : 90000000, price: 5, initialWeight : 1, finalWeight : 10 },
        {id:2, originPostalCode: 90000100, destinationPostalCode : 90050000, price: 10, initialWeight : 1, finalWeight : 10 }
    ]

    getByPostalCode(postalCode : number): any[] {      
      let result : any[] = [];
      this.postalCodeTable.forEach((item)=>{        
         if ( postalCode >=  item.originPostalCode && postalCode <=  item.destinationPostalCode){
          
            result.push(item);
         }
      })      
      return result;
    }

}