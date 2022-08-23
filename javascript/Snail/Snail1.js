// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function (array) {
  let n = array[0].length; //
  if (n == 0) return [];

  indexArray = [];
  let vert = n;
  //
  let lastItem = -1;
  //attempt recurse fns...

  while (n > 0) {
    lastItem = square(lastItem, vert, n);
    n = n - 2;
  }
  console.log(`list of indexes ${indexArray}`);
  //1 indexes are 0
  //2 indexes are 0,1,        3,              2
  //3 indexes are 0,1,2,      5,8,            7,6             3,            4
  //4 indexes are 0,1,2,3,    7,11,15,        14,13,12,       8,4,          5,6,      10,       9
  // going backwards... (above seems better, 4 fns each time, 4th ends on sqrt, carry that to n+1)

  let answerArray = [];
  // flatten original array...
  //arr = array.flat();
  arr = array.reduce((acc, val) => acc.concat(val), []);
  for (i in indexArray) {
    answerArray.push(arr[indexArray[i]]);
  }
  return answerArray;
};
function square(lastItem, vert, n) {
  lastItem = square1(lastItem, n);
  lastItem = square2(lastItem, vert, n);
  lastItem = square3(lastItem, n);
  lastItem = square4(lastItem, vert, n);
  return lastItem;
}
function square1(lastItem, n) {
  let j = 0;
  for (let i = lastItem + 1; j < n; i++, j++) {
    indexArray.push(i);
    lastItem = i;
  }
  return lastItem;
}
function square2(lastItem, vert, n) {
  let j = n - 1;
  for (let i = lastItem + vert; j > 0; j--, i = i + vert) {
    indexArray.push(i);
    lastItem = i;
  }
  return lastItem;
}
function square3(lastItem, n) {
  for (let i = lastItem - 1; n > 1; n--, i--) {
    indexArray.push(i);
    lastItem = i;
  }
  return lastItem;
}
function square4(lastItem, vert, n) {
  let j = n - 2;
  for (let i = lastItem - vert; j > 0; j--, i = i - vert) {
    indexArray.push(i);
    lastItem = i;
  }
  return lastItem;
}

let ans = snail([
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
console.log(ans);
