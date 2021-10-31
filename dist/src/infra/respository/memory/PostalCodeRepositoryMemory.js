"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalCodeRepositoryMemory = void 0;
const PostalCode_1 = require("../../../application/usecase/PostalCode");
class PostalCodeRepositoryMemory {
    constructor() {
        this.listPostalCode = [{ "id": 1, "code": 89897856, "city": "Sao Paulo", "value": 15.58 },
            { "id": 2, "code": 85497856, "city": "Rio de Janeiro", "value": 10.66 },
            { "id": 3, "code": 89878856, "city": "Curtiba", "value": 9.25 },
            { "id": 4, "code": 98952856, "city": "Belo Horizonte", "value": 5.58 }
        ];
    }
    convertResult(postalCodeResult) {
        const postalCode = new PostalCode_1.PostalCode;
        postalCode.id = postalCodeResult.id;
        postalCode.code = postalCodeResult.code;
        postalCode.city = postalCodeResult.city;
        postalCode.value = postalCodeResult.value;
        return postalCode;
    }
    findByPostalCode(postalCode) {
        const postalCodeResult = this.listPostalCode.find(item => item.code === postalCode);
        if (!postalCodeResult)
            throw new Error('Postal code not found');
        return this.convertResult(postalCodeResult);
    }
}
exports.PostalCodeRepositoryMemory = PostalCodeRepositoryMemory;
