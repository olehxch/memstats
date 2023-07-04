class Converter {
  secondsToMinutes(seconds) {
    return Math.floor(seconds / 60);
  }

  bytesToMegabytes(bytes) {
    return Math.ceil((bytes / 1024 / 1024) * 100) / 100;
  }

  bytesToGigabytes(bytes) {
    return Math.ceil((bytes / 1024 / 1024 / 1024) * 100) / 100;
  }
}

module.exports = new Converter();
