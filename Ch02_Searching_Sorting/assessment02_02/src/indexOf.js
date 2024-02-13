function indexOf(isMatch, elements) {
  if( Array.isArray(elements)) {
    let n = elements.length;
    for (let i=0; i<n; i++) {
      if (isMatch(elements[i], i, elements)) {
        return i;
      }
    }
  }
  return -1;
}

module.exports = indexOf;