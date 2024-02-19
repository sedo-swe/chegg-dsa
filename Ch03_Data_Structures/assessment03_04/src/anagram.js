/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
    s1 = s1.toLocaleLowerCase();
    s2 = s2.toLocaleLowerCase();
    const s1Map = new Map();
    for (let i=0; i<s1.length; i++) {
      let c = s1.charAt(i);
      if (s1Map.has(c))
        s1Map.set(c, s1Map.get(c) + 1);
      else
        s1Map.set(c, 1);
    }
    const s2Map = new Map();
    for (let i=0; i<s2.length; i++) {
      let c = s2.charAt(i);
      if (s2Map.has(c))
        s2Map.set(c, s2Map.get(c) + 1);
      else
        s2Map.set(c, 1);
    }

    if (s1Map.size != s2Map.size)
      return false;
    for (let k of s1Map.keys()) {
        if (s1Map.get(k) != s2Map.get(k))
            return false;
    }
    return true;
  }

  console.log(anagram("abc", "bca"));
  console.log(anagram("abc", "bcae"));
  
  module.exports = anagram;
  