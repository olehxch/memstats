const V8Memory = require('./core').V8Memory;
const OSMemory = require('./core').OSMemory;
const ProcessMemory = require('./core').ProcessMemory;
const converter = require('./converter');

class MemoryStats {
  #json = {};

  json() {
    this.#uptime();
    this.#processMemoryUsed();
    this.#maxMemoryAvailable();

    return this.#json;
  }

  #uptime() {
    const uptime = `${converter.secondsToMinutes(ProcessMemory.uptime())} min`;

    this.#json.uptime = uptime;

    return this;
  }

  #processMemoryUsed() {
    const processMemoryUsed = `${converter.bytesToMegabytes(ProcessMemory.memoryUsageRSS())} MB`;

    this.#json.processMemoryUsed = processMemoryUsed;

    return this;
  }

  #maxMemoryAvailable() {
    const maxMemoryAvailable = `${converter.bytesToGigabytes(V8Memory.getHeapStatistics().total_available_size)} Gb`;

    this.#json.maxMemoryAvailable = maxMemoryAvailable;

    return this;
  }
}

module.exports = new MemoryStats();
