
export interface ISomeLogger {

  log(_s: string): void;

}

export class SomeLogger implements ISomeLogger {

  public log(_s: string): void {
    console.log(_s);
  }

}

let logger = new SomeLogger();
logger.log('Well done!');
