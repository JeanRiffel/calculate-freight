import ProductInput from "../product/ProductInput";

export default class PlaceOrderInput {

  constructor(
    readonly id: string,
    readonly productList: Array<ProductInput>
  ){}

}