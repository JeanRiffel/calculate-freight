export default class OrderProductInput {

  constructor(
    readonly id: string,
    readonly description : string,
    readonly weight: number,
    readonly length: number,
    readonly width: number,
    readonly price: number
  ){}

}