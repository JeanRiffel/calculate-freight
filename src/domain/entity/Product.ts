export default class Product {

    private uuid : string = '';
    private description : string = '';
    private weight : number  = 0;    
    private height : number = 0;
    private length : number = 0;
    private width : number = 0;
    private price : number = 0;

    public getUuid(): string {
        return this.uuid;
    }

    public setUuid(uuid: string): void {
        this.uuid = uuid;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getLength(): number {
        return this.length;
    }

    public setLength(length: number): void {
        this.length = length;
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getVolume() : number{
        return this.height * this.width * this.weight;
    }



}