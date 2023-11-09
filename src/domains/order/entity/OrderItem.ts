import { ProductTypes } from "../../product/utils/enumHelper";

export default class OrderItem {
  public id: string = '';
  public description: string ='';
  public weight: number = 0;    
  public height: number = 0;
  public length: number = 0;
  public width: number = 0;
  public price: number = 0;
  public type: ProductTypes | undefined;
  public orderId: string = '';
}