/**
 * return the union of two sets
 */
function union(s1, s2) {
    let more;
    let less;
    if (s1.size >= s2.size) {
      more = s1;
      less = s2;
    } else {
      more = s2;
      less = s1;
    }
    
    for (let n of less.values()) {
      more.add(n);
    }
    return more;
  }
  
  /**
   * return the intersection of two sets
   */
  function intersect(s1, s2) {
    let more;
    let less;
    let common = new Set();
    if (s1.size >= s2.size) {
      more = s1;
      less = s2;
    } else {
      more = s2;
      less = s1;
    }
    
    for (let n of less.values()) {
      if (more.has(n)) {
        common.add(n);
      }
    }
    return common;
  }
  
  /**
   * return the difference of two sets
   */
  function difference(s1, s2) {
    for (let n of s2.values()) {
      if (s1.has(n)) {
        s1.delete(n);
      }
    }
    return s1;
  }
  
  module.exports = { union, intersect, difference };
  