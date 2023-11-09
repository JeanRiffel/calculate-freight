export default interface Repository<T>{
    generateId() : Promise<string>;
    save(object: T): Promise<boolean>;
    delete(id : string): Promise<boolean>;
    update(id : string): Promise<boolean>;
    getById(id : string) : Promise<T>;
    getAll(): Promise<T[]>;    
}