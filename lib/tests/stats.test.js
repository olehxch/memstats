const MemStats = require('../stats');

describe('MemStats', () => {
  it('should exist', () => {
    expect.assertions(1);

    expect(MemStats).toBeDefined();
  });
  
  it('should successfully return system stats', () => {
    expect.assertions(3);

    const result = MemStats.json();

    expect(result.uptime).toBeDefined();
    expect(result.processMemoryUsed).toBeDefined();
    expect(result.maxMemoryAvailable).toBeDefined();
  });
});
