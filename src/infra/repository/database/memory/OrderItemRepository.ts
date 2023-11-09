import OrderItem from "../../../../domains/order/entity/OrderItem"
import Repository from "../../../../domains/repository/Repository";
import DatabaseConnection from "../../../database/DatabaseConnection";
import { v4 as uuidv4 } from 'uuid';

export default class OrderItemRepository implements Repository<OrderItem> {
  private _orderItemList: Array<OrderItem>;

  constructor(databaseConnection: DatabaseConnection){
    this._orderItemList = new Array<OrderItem>();
  }
 
  getAll(): Promise<OrderItem[]> {
    throw new Error("Method not implemented.");
  }

  async generateId(): Promise<string> {
    return uuidv4();
  }

  async save(object: OrderItem): Promise<boolean> {
    this._orderItemList.push(object);
    return true
  }

  async delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async update(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async getById(id: string): Promise<OrderItem> {
    throw new Error("Method not implemented.");
  }

  async getAllOrderItem(): Promise<OrderItem[]> {
    return this._orderItemList;
  }

}