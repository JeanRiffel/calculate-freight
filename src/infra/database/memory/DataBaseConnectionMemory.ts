import DatabaseConnection from "../DatabaseConnection";

export default class DataBaseConnectionMemory implements DatabaseConnection {
	memory: any;
	static instance: DataBaseConnectionMemory;

	private constructor () {
		this.memory = true
	}

	static getInstance () {
		if (!DataBaseConnectionMemory.instance) {
			DataBaseConnectionMemory.instance = new DataBaseConnectionMemory();
		}
		return DataBaseConnectionMemory.instance;
	}

	async query(statement: string, params: any[]): Promise<any> {
		return this.memory.query(statement, params);
	}
}
