import DatabaseConnection from "./DatabaseConnection";
import pgp from "pg-promise";

export default class DatabaseConnectionAdapter implements DatabaseConnection {
	pgp: any;
	static instance: DatabaseConnectionAdapter;

	private constructor () {
		this.pgp = pgp()("postgres://john:1234@localhost:5432/freight");
	}

	static getInstance () {
		if (!DatabaseConnectionAdapter.instance) {
			DatabaseConnectionAdapter.instance = new DatabaseConnectionAdapter();
		}
		return DatabaseConnectionAdapter.instance;
	}

	async query(statement: string, params: any[]): Promise<any> {
		return this.pgp.query(statement, params);
	}
}

