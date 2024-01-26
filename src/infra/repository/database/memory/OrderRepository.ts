import Order from "../../../../domains/order/entity/Order";
import Repository from "../../../../domains/repository/Repository";
import DatabaseConnection from "../../../database/DatabaseConnection";
import { v4 as uuidv4 } from 'uuid';

export default class OrderRepository implements Repository<Order>{
  private _orderList: Array<Order>;

	constructor(readonly databaseConnection : DatabaseConnection){
		this._orderList = new Array<Order>();
	}
 
  getAll(): Promise<Order[]> {
    throw new Error("Method not implemented.");
  }

  async generateId(): Promise<string> {
    return uuidv4();
  }

  async save(object: Order): Promise<boolean> {
    this._orderList.push(object)
    return true;
  }

  async delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async update(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async getById(id: string): Promise<Order> {
    throw new Error("Method not implemented.");
  }

  async getAllOrder(): Promise<Order[]> {
    return this._orderList;
  }
  
}