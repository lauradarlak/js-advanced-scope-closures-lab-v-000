
function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    const range = Math.abs(startBlock.slice(0,2) - endBlock.slice(0,2))
    const diffRange = Math.abs(blockRange - range)
    if(range <= blockRange) {
      return `within range by ${diffRange}`
    } else {
      return `${diffRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent
  }
}

function createDriver() {
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
