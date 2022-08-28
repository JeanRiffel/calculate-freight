export default abstract class  Product{
	public id: number = 0;
	public name: string = '';
  public description: string = '';
  public weight : number = 0;
  public height: number = 0;
  public width: number = 0;
  public length: number = 0;
	public price: number =0;
	
  getDimension(): number {
		return ( this.length * this.width ) * this.height;
  }

	getWeight() : number{
		return this.weight;
	}

	getPrice() : number{
		return this.price;
	}

}