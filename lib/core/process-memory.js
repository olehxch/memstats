class ProcessMemory {
  /**
   * Returns the number of seconds the current Node.js process has been running.
   * @returns {string}
   */
  uptime() {
    return process.uptime();
  }

  /**
   * Returns an object describing the memory usage of the Node.js process measured in bytes.
   * 
   * - heapTotal and heapUsed refer to V8's memory usage.
   * - external refers to the memory usage of C++ objects bound to JavaScript objects managed by V8.
   * - rss, Resident Set Size, is the amount of space occupied in the main memory device (that is a subset of the total allocated memory) for the process, including all C++ and JavaScript objects and code.
   * - arrayBuffers refers to memory allocated for ArrayBuffers and SharedArrayBuffers, 
   *   including all Node.js Buffers. This is also included in the external value. 
   *   When Node.js is used as an embedded library, this value may be 0 because allocations for ArrayBuffers may not be tracked in that case.
   *
   * When using Worker threads, rss will be a value that is valid for the entire process, while the other fields will only refer to the current thread.
   * The process.memoryUsage() method iterates over each page to gather information about memory usage which might be slow depending on the program memory allocations. 
   * @returns {object}
   */
  memoryUsage() {
    return process.memoryUsage();
  }

  /**
   * The process.memoryUsage.rss() method returns an integer representing the Resident Set Size (RSS) in bytes.
   * The Resident Set Size, is the amount of space occupied in the main memory device 
   * (that is a subset of the total allocated memory) for the process, including all C++ and JavaScript objects and code.
   * @returns {number}
   */
  memoryUsageRSS() {
    return process.memoryUsage().rss;
  }
}

module.exports = new ProcessMemory();
