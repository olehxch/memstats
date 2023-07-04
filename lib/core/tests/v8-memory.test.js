const V8Memory = require('../v8-memory');

describe('Core - V8Memory', () => {
  it('should exist', () => {
    expect.assertions(1);

    expect(V8Memory).toBeDefined();
  });

  it('should successfully return heap statistics', () => {
    expect.assertions(1);

    const result = V8Memory.getHeapStatistics();

    expect(result).toBeDefined();
  });
});
