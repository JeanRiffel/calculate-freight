export default class ProductInput {

    constructor(readonly id : string,
        readonly description : string,
        readonly weight: number,        
        readonly height: number,
        readonly length: number,
        readonly width: number,
        readonly price: number
    ){};
}

