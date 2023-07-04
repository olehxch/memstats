const os = require('os');

class OSMemory {
  /**
   * Returns the amount of free system memory in bytes as an integer.
   * @returns {number}
   */
  freeMemory() {
    return os.freemem();
  }

  /**
   * 
   * Returns the total amount of system memory in bytes as an integer.
   * @returns {number}
   */
  totalMemory() {
    return os.totalmem();
  }
}

module.exports = new OSMemory();
