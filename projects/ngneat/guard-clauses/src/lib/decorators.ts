import Guard from './guard-clauses';

export function notNull(target: any, propertyKey: string, parameterIndex: number): void {
  Validator.registerNotNull(target, propertyKey, parameterIndex);
}

export function validate(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
  const originalMethod = descriptor.value;
  descriptor.value = function wrapper(...args: any[]): any {
    if (!Validator.performValidation(target, propertyKey, args)) {
      console.log('validation failed, method call aborted: ' + propertyKey);
      return;
    }
    const result = originalMethod.apply(this, args);
    return result;
  };
}

class Validator {
  private static notNullValidatorMap: Map<any, Map<string, number[]>> = new Map();
  private static createNotNullMap(target): any {
    const paramMap = new Map();
    this.notNullValidatorMap.set(target, paramMap);
    return paramMap;
  }
  private static createParamIndexes(paramMap, methodName): any {
    const paramIndexes = [];
    paramMap.set(methodName, paramIndexes);
    return paramIndexes;
  }
  // todo add more validator maps
  static registerNotNull(target: any, methodName: string, paramIndex: number): void {
    const paramMap = this.notNullValidatorMap.get(target) || Validator.createNotNullMap(target);
    const paramIndexes = paramMap.get(methodName) || Validator.createParamIndexes(paramMap, methodName);
    paramIndexes.push(paramIndex);
  }

  static performValidation(target: any, methodName: string, paramValues: any[]): boolean {
    Validator.validateNotnull(target, methodName, paramValues);
    return true;
  }

  private static validateNotnull(target: any, methodName: string, paramValues: any[]): void {
    const notNullMethodMap = this.notNullValidatorMap.get(target);
    const paramIndexes = notNullMethodMap?.get(methodName) || false;
    for (const [index, paramValue] of paramValues?.entries()) {
      if (paramIndexes && paramIndexes.indexOf(index) !== -1) {
        Guard.against.null(paramValue, index as any);
      }
    }
  }
}
