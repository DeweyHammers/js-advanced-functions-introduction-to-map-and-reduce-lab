const mapToNegativize = (sourceArray) => {
  return sourceArray.map(source => source * -1);
}

const mapToNoChange = (sourceArray) => {
  return sourceArray.map(source => source);
}

const mapToDouble = (sourceArray) => {
  return sourceArray.map(source => source * 2);
}

const mapToSquare = (sourceArray) => {
  return sourceArray.map(source => source * source);
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
  return sourceArray.reduce((sum, current) => sum + current, startingPoint)
}

const reduceToAllTrue = (sourceArray) => {
  return sourceArray.every(e => e);
}


const reduceToAnyTrue = (sourceArray) => {
  let current = false
  sourceArray.forEach(e => {
    if (e === true) current = true
  })
  return current;
}
