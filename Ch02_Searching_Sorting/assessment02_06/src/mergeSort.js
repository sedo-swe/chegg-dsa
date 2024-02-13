function mergeSort(compare, elements) {
  if (Array.isArray(elements)) {
    if (elements.length <= 1) {
      return elements;
    }
    
    const middle = Math.floor(elements.length / 2);
    const leftArr = elements.slice(0, middle);
    const rightArr = elements.slice(middle);
    
    const leftSorted = mergeSort(compare, leftArr);
    const rightSorted = mergeSort(compare, rightArr);
    return merge(compare, leftSorted, rightSorted);
  }
  return elements;
}

function merge(compare, leftSorted, rightSorted) {
  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < leftSorted.length && rightIndex < rightSorted.length) {
    const comparison = compare(leftSorted[leftIndex], rightSorted[rightIndex]);
    if( comparison <= 0) {
      sorted.push(leftSorted[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(rightSorted[rightIndex]);
      rightIndex++;
    }
  }
  return sorted.concat(leftIndex < leftSorted.length ? leftSorted.slice(leftIndex) : rightSorted.slice(rightIndex)); 
}

module.exports = mergeSort;
