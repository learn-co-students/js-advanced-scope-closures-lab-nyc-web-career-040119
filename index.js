function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let travelDistance = Math.abs(end - start);
    let difference = blockRange - travelDistance;

    if (difference > 0){
      return `within range by ${difference}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  }
}

function produceTipCalculator(tipPercent){
  return function(fare){
    return tipPercent * fare;
  }
}

function createDriver(){
  let driverID = 0;
  return class {
    constructor(name){
      this.id = ++driverID;
      this.name = name;
    }
  }
}
