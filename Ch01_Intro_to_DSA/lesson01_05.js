function insertIntoSortedArray(sequence) {
    const key = sequence[sequence.length - 1];
  
    for (let i = sequence.length - 2; i >= 0; i--) {
      if (sequence[i] > key) {
        sequence[i + 1] = sequence[i];
      } else {
        sequence[i + 1] = key;
        return sequence;
      }
    }
    sequence[0] = key;
    return sequence;
  }