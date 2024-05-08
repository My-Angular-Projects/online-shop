import { IUser } from '../shared/types';

export namespace Auth {
  export class Logging {
    static readonly type = '[Auth] Logging';
    constructor(public user: IUser) {}
  }

  export class NotLogging {
    static readonly type = '[Auth] Not Logging';
  }
}
