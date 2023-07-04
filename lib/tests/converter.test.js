const Converter = require('../converter');

describe('Converter', () => {
  it('should exist', () => {
    expect.assertions(1);

    expect(Converter).toBeDefined();
  });

  it('should successfully convert seconds to minutes', () => {
    expect.assertions(1);

    const result = Converter.secondsToMinutes(60);

    expect(result).toBeDefined();
  });

  it('should successfully convert seconds to minutes as a number', () => {
    expect.assertions(1);

    const result = Converter.secondsToMinutes(60);

    expect(typeof result).toBe('number');
  });

  it('should successfully convert seconds to minutes as a number greater than 0', () => {
    expect.assertions(1);

    const result = Converter.secondsToMinutes(60);

    expect(result).toBeGreaterThan(0);
  });

  it('should successfully convert seconds to minutes as a number less than 60', () => {
    expect.assertions(1);

    const result = Converter.secondsToMinutes(60);

    expect(result).toBeLessThan(60);
  });

  it('should successfully convert bytes to megabytes', () => {
    expect.assertions(1);

    const result = Converter.bytesToMegabytes(1024);

    expect(result).toBeDefined();
  });

  it('should successfully convert bytes to megabytes as a number', () => {
    expect.assertions(1);

    const result = Converter.bytesToMegabytes(1024);

    expect(typeof result).toBe('number');
  });

  it('should successfully convert bytes to megabytes as a number greater than 0', () => {
    expect.assertions(1);

    const result = Converter.bytesToMegabytes(1024);

    expect(result).toEqual(0.01);
  })

  it('should successfully convert bytes to megabytes as a number less than 1024', () => {
    expect.assertions(1);

    const result = Converter.bytesToMegabytes(1024 * 1024);

    expect(result).toEqual(1);
  });

  it('should successfully convert bytes to gigabytes', () => {
    expect.assertions(1);

    const result = Converter.bytesToGigabytes(1073741824);

    expect(result).toBeDefined();
  });

  it('should successfully convert bytes to gigabytes as a number', () => {
    expect.assertions(1);

    const result = Converter.bytesToGigabytes(1073741824);

    expect(typeof result).toBe('number');
  });

  it('should successfully convert bytes to gigabytes as a number', () => {
    expect.assertions(1);

    const result = Converter.bytesToGigabytes(1073741824);

    expect(result).toEqual(1);
  });
});
