
Menu
Q

1
/**
2
 * return true if two arrays are equal, false otherwise
3
 */
4
function isEqual(a1, a2) {
5
  let a1Map = new Map();
6
  let a2Map = new Map();
7
  for (let n of a1) {
8
    if (a1Map.has(n)) {
9
      let tCnt = a1Map.get(n);
10
      a1Map.set(n, tCnt + 1);
11
    } else {
12
      a1Map.set(n, 1);
13
    }
14
  }
15
  
16
  for (let n of a2) {
17
    if (a2Map.has(n)) {
18
      let tCnt = a2Map.get(n);
19
      a2Map.set(n, tCnt + 1);
20
    } else {
21
      a2Map.set(n, 1);
22
    }
23
  }
24
  
25
  for (const [k, v] of a1Map.entries()) {
26
    if(a2Map.get(k) != v) {
27
      return false;
28
    }
29
  }
30
  return true;
31
}
32
​
33
module.exports = isEqual;
34
​
