import OrderItem from "../../../domains/order/entity/OrderItem";
import AbstractRepositoryFactory from "../../../domains/repository/AbstractRepositoryFactory";
import Repository from "../../../domains/repository/Repository";
import DatabaseConnection from "../../database/DatabaseConnection";
import OrderItemRepository from "../../repository/database/memory/OrderItemRepository";

export default class OrderItemMemoryRepositoryFactory implements AbstractRepositoryFactory<OrderItem>{
  private _orderItemRepository: OrderItemRepository;
  
  constructor(databaseConnection: DatabaseConnection){
    this._orderItemRepository = new OrderItemRepository(databaseConnection);
  }

  createRepository(): Repository<OrderItem> {
    return this._orderItemRepository;
  }
  
} 