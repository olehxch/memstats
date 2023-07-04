const stats = require('../lib');

describe('Export', () => {
  it('should exist', () => {
    expect.assertions(1);

    expect(stats).toBeDefined();
  });

  it('should successfully return system stats', () => {
    expect.assertions(3);

    const result = stats.json();

    expect(result.uptime).toBeDefined();
    expect(result.processMemoryUsed).toBeDefined();
    expect(result.maxMemoryAvailable).toBeDefined();
  });
});
