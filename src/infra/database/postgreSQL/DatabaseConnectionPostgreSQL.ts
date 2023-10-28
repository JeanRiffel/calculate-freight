import DatabaseConnection from "../DatabaseConnection";
import pgp from "pg-promise";

export default class DatabaseConnectionPostgreSQL implements DatabaseConnection {
	pgp: any;
	static instance: DatabaseConnectionPostgreSQL;

	private constructor () {
		this.pgp = pgp()("postgres://john:1234@localhost:5432/freight");
	}

	static getInstance () {
		if (!DatabaseConnectionPostgreSQL.instance) {
			DatabaseConnectionPostgreSQL.instance = new DatabaseConnectionPostgreSQL();
		}
		return DatabaseConnectionPostgreSQL.instance;
	}

	async query(statement: string, params: any[]): Promise<any> {
		return this.pgp.query(statement, params);
	}
}

