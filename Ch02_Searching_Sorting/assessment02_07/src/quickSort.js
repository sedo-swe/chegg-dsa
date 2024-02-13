function quickSort(
  compare,
  elements,
  lowerIndex = 0,
  upperIndex = elements.length - 1
) {
  if (lowerIndex < upperIndex) {
    let partitionIndex = partition(compare, elements, lowerIndex, upperIndex);
    quickSort(compare, elements, lowerIndex, partitionIndex - 1);
    quickSort(compare, elements, partitionIndex + 1, upperIndex);
  }
  return elements;
}

function partition(compare, elements, lowerIndex, upperIndex) {
  let pivotValue = elements[upperIndex];
  let partitionIndex = lowerIndex;

  for (let i=lowerIndex; i<upperIndex; i++) {
    if (compare(pivotValue, elements[i]) > 0) {
      if (partitionIndex !== i) {
        [elements[i], elements[partitionIndex]] = 
          [elements[partitionIndex], elements[i]];  
      }
      partitionIndex++;
    }
  }
  [elements[partitionIndex], elements[upperIndex]] = 
        [elements[upperIndex], elements[partitionIndex],];
  return partitionIndex;
}

module.exports = quickSort;
