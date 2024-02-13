function bubbleSort(compare, elements) {
  if (Array.isArray(elements)) {
      let inOrder;
  
      do {
        inOrder = true;
        
        for (let i=0, length = elements.length - 1; i<length; i++) {
          if (compare(elements[i], elements[i+1]) > 0) {
            let temp = elements[i+1];
            elements[i+1] = elements[i];
            elements[i] = temp;
            inOrder = false;
          }
        }
      }
      while (inOrder === false);
  }
  
  return elements;
}

module.exports = bubbleSort;