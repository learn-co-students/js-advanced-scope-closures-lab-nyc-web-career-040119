// `produceDrivingRange()`Calculates whether a
//   given trip is within range.  For example, `produceDrivingRange(10)` returns a
//   function that will take two strings as arguments and returns a message stating
//   whether the trip is in range. If `foo = produceDrivingRange(10)`, then
//   `foo('12th', '15th')` would return `"within range by 7"` and `foo('12th',
//   '30th')` would return `"8 blocks out of range"`. We recommend referencing the
//   `test/indexTest.js` for more details.

function produceDrivingRange(blockRange){
  return function(start, end){
    //change string to number
    const startNum = start.split("th")[0]
    const endNum = end.split("th")[0]
    //refactored repeating code
    const endMinusStart = endNum - startNum

    if (endMinusStart < blockRange){
      return `within range by ${endMinusStart}`
    } else {
      return `${(endMinusStart) - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercentage){
  return function(fare){
    return fare * tipPercentage
  }
}


function createDriver(){
  // The class has reference to a `driverId` that is incremented each time a new driver is created.
  let driverId = 0

  // returns a class
  // new Class = createDriver() can access this now
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
