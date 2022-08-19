// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

const funcs = {
  indexArray: [],
  snail: function (array) {
    let n = array[0].length; //
    if (n == 0) return [];
    // recursion here...
    //
    // let range = (min, max) =>
    //   [...Array(max - min + 1).keys()].map((i) => i + min);
    // // Array.from({ length: max - min + 1 }, (_, i) => min + i);
    // let indexes = range(start, end);
    funcs.indexArray = [];
    let vert = n;
    //
    let lastItem = -1;
    //attempt recurse fns...
    //
    // lastItem = funcs.square(lastItem, vert, n);
    // n = n - 2;
    // lastItem = funcs.square(lastItem, vert, n);
    // n = n - 2;
    while (n > 0) {
      lastItem = funcs.square(lastItem, vert, n);
      n = n - 2;
    }
    console.log(`list of indexes ${funcs.indexArray}`);
    //1 indexes are 0
    //2 indexes are 0,1,        3,              2
    //3 indexes are 0,1,2,      5,8,            7,6             3,            4
    //4 indexes are 0,1,2,3,    7,11,15,        14,13,12,       8,4,          5,6,      10,       9
    //5 indexes are 0,1,2,3,4   9,14,19,24      23,22,21,20     15,10,5       6,7,8,    13,18,    17,16,     11,     12
    //6 indexes are 0,1,2,3,4,5 11,17,23,29,35  34,33,32,31,30  24,18,12,6    7,etc. etc.
    // going backwards... (above seems better, 4 fns each time, 4th ends on sqrt, carry that to n+1)
    // 1     1
    // 4     3    4     2,1
    // 9     5    4     7,8       9,6       3,2,1
    // 16    10   11    7,6       5,9       13,14,15      16,12,8,      4,3,2,1

    // thinking got the 4 rules
    // got to apply them on the basis of a starting index n+1 AND n where n=n-2 each iteration

    // adding 1 to each item in indexArray so tests pass
    let answerArray = [];
    // flatten original array...
    arr = array.flat();
    for (i in funcs.indexArray) {
      answerArray.push(arr[funcs.indexArray[i]]);
    }
    return answerArray;
  },
  square: function (lastItem, vert, n) {
    lastItem = funcs.square1(lastItem, n);
    //lastItem = funcs.indexArray.at(-1);
    lastItem = funcs.square2(lastItem, vert, n);
    lastItem = funcs.square3(lastItem, n);
    lastItem = funcs.square4(lastItem, vert, n);
    return lastItem;
  },
  square1: function (lastItem, n) {
    let j = 0;
    for (let i = lastItem + 1; j < n; i++, j++) {
      funcs.indexArray.push(i);
      lastItem = i;
    }
    return lastItem;
  },
  square2: function (lastItem, vert, n) {
    let j = n - 1;
    for (let i = lastItem + vert; j > 0; j--, i = i + vert) {
      funcs.indexArray.push(i);
      lastItem = i;
    }
    return lastItem;
  },
  square3: function (lastItem, n) {
    for (let i = lastItem - 1; n > 1; n--, i--) {
      funcs.indexArray.push(i);
      lastItem = i;
    }
    return lastItem;
  },
  square4: function (lastItem, vert, n) {
    let j = n - 2;
    for (let i = lastItem - vert; j > 0; j--, i = i - vert) {
      funcs.indexArray.push(i);
      lastItem = i;
    }
    return lastItem;
  },
};

module.exports = funcs;
