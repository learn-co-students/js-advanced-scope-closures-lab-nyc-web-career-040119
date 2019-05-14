const produceDrivingRange = function (range) {
  return function (startBlock, endBlock) {
    let diffBy = Math.abs(parseInt(startBlock) - parseInt(endBlock));
    if (diffBy <= range) {
      return `within range by ${range - diffBy}`;
    } else {
      return `${diffBy - range} blocks out of range`;
    }
  };
}

const produceTipCalculator = function (tipAsPct) {
  return function (fare) {
    return fare * tipAsPct;
  };
}

function createDriver() {
  let DriverId = 0;
  return class {
    constructor (name, age) {
      this.name = name;
      this.age = age;
      this.id = ++DriverId;
    }
  };
}
