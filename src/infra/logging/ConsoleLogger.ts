import DataLogger from "../../domains/service/DataLogger";

export default class ConsoleLogger implements DataLogger {
  constructor(){}

  save(message: unknown):void {
    console.log(message)
  }
}
