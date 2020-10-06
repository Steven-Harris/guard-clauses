import { notNull, validate } from './decorators';

export class NullCheck {
  @validate
  public check(@notNull value: string): boolean {
    return true;
  }
}

describe('Decorators', () => {
  it('should throw error when null', () => {
    expect(() => {
      const test = new NullCheck();
      test.check(null);
    }).toThrowError();
  });

  it('should not throw error when parameter has a value', () => {
    const test = new NullCheck();
    const result = test.check('somdf');
    expect(result).toBeTruthy();
  });
});
