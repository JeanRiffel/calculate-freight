import Order from "../entity/Order";

export default  interface IOrderRepository{
    getOrderId() : string;
    save(order : Order): boolean;
    delete(id : string): boolean;
    update(id : string): boolean;
    getById(id : string) : Order;    
}