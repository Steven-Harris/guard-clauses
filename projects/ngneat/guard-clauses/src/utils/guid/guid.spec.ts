import { Guid } from './guid';

describe('Guid test', () => {
  it('Should create a guid', () => {
    const wrong = 'wrongguid';
    expect(Guid.isGuid(wrong)).toBeFalsy();

    const right = Guid.newGuid();
    expect(Guid.isGuid(right)).toBeTruthy();
  });

  it('Should raw a guid', () => {
    const wrong = 'wrongguid';
    expect(Guid.isGuid(wrong)).toBeFalsy();

    const right = Guid.raw();
    expect(Guid.isGuid(right)).toBeTruthy();
  });

  it('Should compare another guid', () => {
    const wrong = Guid.newGuid();
    expect(wrong.equals(Guid.newGuid())).toBeFalsy();

    const right = Guid.newGuid();
    expect(right.equals(right)).toBeTruthy();
  });

  it('Should compare another guid empty', () => {
    const wrong = Guid.createEmpty();
    expect(wrong.equals(Guid.newGuid())).toBeFalsy();

    const right = Guid.createEmpty();
    expect(right.equals(Guid.createEmpty())).toBeTruthy();
  });

  it('Should verify if is guid', () => {
    const wrong = 'wrong guid';
    expect(Guid.isGuid(wrong)).toBeFalsy();

    const right = Guid.newGuid();
    expect(Guid.isGuid(right)).toBeTruthy();
  });

  it('Should parse a guid', () => {
    const wrong = Guid.raw();
    expect(Guid.parse(wrong).equals(Guid.newGuid())).toBeFalsy();

    const right = Guid.raw();
    expect(Guid.parse(right).equals(Guid.parse(right))).toBeTruthy();
  });

  it('Should be unique value', () => {
    const guids = [];
    for (let index = 0; index < 3000; index++) {
      guids.push(Guid.newGuid());
    }
    expect(guids.indexOf(guids[0]) < 0).toBeFalsy();

    expect(guids.indexOf(Guid.newGuid()) < 0).toBeTruthy();
  });
});
