export class PostalCodeDestination{
    
    private _postalCode : number = 0;
    private listPostalCode =  [ { "id" : "1", "postalCode" : 89897856, "city" : "Sao Paulo", "value" : 15.58 },
                                { "id" : "2", "postalCode" : 85497856, "city" : "Rio de Janeiro", "value" : 10.66 },
                                { "id" : "3", "postalCode" : 89878856, "city" : "Curtiba", "value" : 9.25 },
                                { "id" : "4", "postalCode" : 98952856, "city" : "Belo Horizonte", "value" : 5.58 }
                            ]; 

    constructor(readonly postalCode : number){
        this._postalCode = postalCode;
    }

    getValue() : number {
        let findValue = undefined;                        
        findValue =  this.listPostalCode.find(item => item.postalCode === this._postalCode);        
        if (!findValue){ return 0;  }
        return findValue.value;        
    }

}