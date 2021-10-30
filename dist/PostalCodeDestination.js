"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalCodeDestination = void 0;
class PostalCodeDestination {
    constructor(postalCode) {
        this.postalCode = postalCode;
        this._postalCode = 0;
        this.listPostalCode = [{ "id": "1", "postalCode": 89897856, "city": "Sao Paulo", "value": 15.58 },
            { "id": "2", "postalCode": 85497856, "city": "Rio de Janeiro", "value": 10.66 },
            { "id": "3", "postalCode": 89878856, "city": "Curtiba", "value": 9.25 },
            { "id": "4", "postalCode": 98952856, "city": "Belo Horizonte", "value": 5.58 }
        ];
        this._postalCode = postalCode;
    }
    getValue() {
        let findValue = undefined;
        findValue = this.listPostalCode.find(item => item.postalCode === this._postalCode);
        if (!findValue) {
            return 0;
        }
        return findValue.value;
    }
}
exports.PostalCodeDestination = PostalCodeDestination;
