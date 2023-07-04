const OSMemory = require('../os-memory');

describe('Core - OSMemory', () => {
  it('should exist', () => {
    expect.assertions(1);

    expect(OSMemory).toBeDefined();
  });

  it('should successfully return free memory', () => {
    expect.assertions(1);

    const result = OSMemory.freeMemory();

    expect(result).toBeDefined();
  });

  it('should successfully return total memory', () => {
    expect.assertions(1);

    const result = OSMemory.totalMemory();

    expect(result).toBeDefined();
  });
});
