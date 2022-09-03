import DatabaseConnection from "./DatabaseConnection";

export default class DatabaseConnectionAdapter implements DatabaseConnection {
    pgp: any;

    constructor () {
    }

    query(statement: string, params: any) {
        return this.pgp.query(statement, params);
    }
}