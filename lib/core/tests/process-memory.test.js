const ProcessMemory = require('../process-memory');

describe('Core - ProcessMemory', () => {
  it('should exist', () => {
    expect.assertions(1);

    expect(ProcessMemory).toBeDefined();
  });

  it('should successfully return uptime', () => {
    expect.assertions(1);

    const result = ProcessMemory.uptime();

    expect(result).toBeDefined();
  });

  it('should successfully return memory usage', () => {
    expect.assertions(1);

    const result = ProcessMemory.memoryUsage();

    expect(result).toBeDefined();
  });

  it('should successfully return memory usage rss', () => {
    expect.assertions(1);

    const result = ProcessMemory.memoryUsageRSS();

    expect(result).toBeDefined();
  });

  it('should successfully return memory usage rss as a number', () => {
    expect.assertions(1);

    const result = ProcessMemory.memoryUsageRSS();

    expect(typeof result).toBe('number');
  });

  it('should successfully return memory usage rss as a number greater than 0', () => {
    expect.assertions(1);

    const result = ProcessMemory.memoryUsageRSS();

    expect(result).toBeGreaterThan(0);
  });

  it('should successfully return memory usage rss as a number less than 1000000000', () => {
    expect.assertions(1);

    const result = ProcessMemory.memoryUsageRSS();

    expect(result).toBeLessThan(1000000000);
  });
});
