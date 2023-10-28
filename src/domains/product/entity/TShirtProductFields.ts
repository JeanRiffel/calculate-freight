import ProductFields from "./ProductFields";

export default class TShirtProductFields implements ProductFields {
  id: string = '';
  description: string = '';
  weight: number = 0;
  height: number = 0;
  length: number = 0;
  width: number = 0;
  price: number = 0;
}