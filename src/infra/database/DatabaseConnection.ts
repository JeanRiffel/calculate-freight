export default interface DatabaseConnection {
    query(command: string, values: any): any;
}