import Order from "../entity/Order";

export default  interface IOrderRepository{
    getId() : string;
    save(order : Order): void;
    delete(id : string): void;
    update(id : string): void;
    getById(id : string) : Order;    
}