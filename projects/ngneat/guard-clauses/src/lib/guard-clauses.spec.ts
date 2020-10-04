import { Guard } from './guard-clauses';

describe('Guard Clause', () => {
  it('should have against property', () => {
    const result = Guard.against;
    expect(result).toBeTruthy();
  });

  it('should guard against null given null', () => {
    expect(() => {
      Guard.against.null(null, 'input');
    }).toThrowError();
  });

  it('should not guard against null given input', () => {
    const result = Guard.against.null({}, 'input');
    expect(result).toBeTruthy();
  });

  it('should guard against nullOrEmpty given empty string', () => {
    expect(() => {
      Guard.against.nullOrEmpty('', 'input');
    }).toThrowError();
  });

  it('should guard against nullOrEmpty given empty Guid', () => {
    expect(() => {
      Guard.against.nullOrEmpty('00000000-0000-0000-0000-000000000000', 'input');
    }).toThrowError();
  });

  it('should not guard against nullOrEmpty given string', () => {
    const result = Guard.against.nullOrEmpty(' seomt do', 'input');
    expect(result).toBeTruthy();
  });

  it('should guard against nullOrEmpty given empty list', () => {
    expect(() => {
      Guard.against.nullOrEmpty([], 'input');
    }).toThrowError();
  });
});
