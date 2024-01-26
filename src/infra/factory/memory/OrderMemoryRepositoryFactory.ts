import Order from "../../../domains/order/entity/Order";
import AbstractRepositoryFactory from "../../../domains/repository/AbstractRepositoryFactory";
import Repository from "../../../domains/repository/Repository";
import DatabaseConnection from "../../database/DatabaseConnection";
import DataBaseConnectionMemory from "../../database/memory/DataBaseConnectionMemory";
import OrderRepository from "../../repository/database/memory/OrderRepository";

export default class OrderMemoryRepositoryFactory implements AbstractRepositoryFactory<Order> {
  private _orderRepository: OrderRepository;

  constructor(databaseConnection: DatabaseConnection ){
    this._orderRepository = new OrderRepository(databaseConnection);
  }
  
  createRepository(): Repository<Order> {
    return this._orderRepository
  }
}
