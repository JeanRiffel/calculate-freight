import Repository from "./Repository";

export default interface AbstractRepositoryFactory<T> {	
	createRepository(): Repository<T>;
}