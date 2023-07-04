const v8 = require('v8');

class V8Memory {
  /**
   * Returns an object with different values
   * @returns {string}
   */
  getHeapStatistics() {
    return v8.getHeapStatistics();
  }
}

module.exports = new V8Memory();
