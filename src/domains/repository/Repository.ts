export default interface Repository<T>{
    getId() : string;
    save(object: T): Promise<boolean>;
    delete(id : string): Promise<boolean>;
    update(id : string): Promise<boolean>;
    getById(id : string) : Promise<T>;
    getAllProducts() : Promise<T[]>;
}