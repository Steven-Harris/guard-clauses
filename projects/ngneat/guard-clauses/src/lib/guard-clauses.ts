import { Guid } from '../utils';

export const EMPTY_GUID = '00000000-0000-0000-0000-000000000000';

// tslint:disable-next-line: no-empty-interface
export interface GuardClause {
  null(input: unknown, parameterName: string): unknown;
  nullOrEmpty(input: unknown, parameterName: string): unknown;
}

export class Guard implements GuardClause {
  public static against = new Guard();

  /**
   *
   *
   * @param input can be anything
   * @param parameterName name of the parameter being checked
   */
  public null(input: unknown, parameterName: string): unknown {
    if (input === null) {
      throw new Error(`${parameterName} can not be null`);
    }
    return input;
  }

  /**
   *
   *
   * @param input can be either a string or Guid
   * @param parameterName name of the parameter being checked
   */
  public nullOrEmpty(input: unknown, parameterName: string): unknown {
    this.null(input, parameterName);
    this.emptyString(input, parameterName);
    this.emptyGuid(input, parameterName);
    this.emptyList(input, parameterName);
    return input;
  }

  private emptyString(input: unknown, parameterName: string): unknown {
    if (typeof input === 'string' && (input === '' || input.trim() === '')) {
      throw new Error(`${parameterName} can not be an empty string`);
    }
    return input;
  }

  private emptyGuid(input: unknown, parameterName: string): unknown {
    if (Guid.isGuid(input) && Guid.parse(input).isEmpty()) {
      throw new Error(`${parameterName} can not be an empty guid`);
    }
    return input;
  }

  private emptyList(input: unknown, parameterName: string): unknown {
    if (Array.isArray(input) && input.length < 1) {
      throw new Error(`${parameterName} can not be an empty list`);
    }
    return input;
  }
}

export default Guard;
