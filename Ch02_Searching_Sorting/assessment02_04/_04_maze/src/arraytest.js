let arr = [];
arr.push([1,1]);
arr.push([1,2]);
arr.push([1,3]);
let dupArr = [1,1];
let nonDupArr = [2,1];
console.log(arr);
console.log(arr.includes(dupArr));

const filtered = arr.filter(a => a[0] === dupArr[0] && a[1] === dupArr[1]);
console.log(filtered.length);

console.log(arr.filter(a => a[0] === dupArr[0] && a[1] === dupArr[1]).length);

const filtered2 = arr.filter(a => a[0] === nonDupArr[0] && a[1] === nonDupArr[1]);
console.log(filtered2.length);

console.log(arr.filter(a => a[0] === nonDupArr[0] && a[1] === nonDupArr[1]).length);


const directions = [[1,0, "D"],[0,1, "R"],[-1,0, "U"],[0,-1, "L"]];
for(let d of directions) {
    console.log(d[2]);
}