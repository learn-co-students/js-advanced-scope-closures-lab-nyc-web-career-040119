function produceDrivingRange(blocks) {
  return function(block1, block2) {
    const blk1 = parseInt(block1)
    const blk2 = parseInt(block2)
    const blkDiff = blk2-blk1
    if (blkDiff < blocks) {
      return `within range by ${blocks-(blkDiff)}`
    } else {
      return `${(blkDiff)-blocks} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare*percent
  }
}


function createDriver(driver) {
  let DriverId = 0

  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId
    }
  }
}
