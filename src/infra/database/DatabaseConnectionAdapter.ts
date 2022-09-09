import DatabaseConnection from "./DatabaseConnection";
import pgp from "pg-promise";

export default class DatabaseConnectionAdapter implements DatabaseConnection {
	pgp: any;
	static instance: DatabaseConnectionAdapter;

	private constructor () {
		this.pgp = pgp()("postgres://freight_db_user:1234@172.17.0.2:5432/test-type-orm");
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