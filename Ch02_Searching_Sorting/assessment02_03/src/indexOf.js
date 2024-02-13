function indexOf(compare, sortedElements) {
  if (Array.isArray(sortedElements)) {
    let left = 0;
    let right = sortedElements.length - 1;
    while (left <= right) {
      let index = Math.floor((left + right)/2);
      let comparison = compare(sortedElements[index], index, sortedElements);
      if (comparison == 0) {
        return index;
      } else if (comparison < 0) {
        right = index - 1;
      } else {
        left = index + 1;
      }
    }
  }
  return -1;
}

module.exports = indexOf;