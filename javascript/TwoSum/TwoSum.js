// find two different items in the array that, when added together, give the target value.
// The indices of these items should then be returned
// in a tuple / list (depending on your language) like so: (index1, index2)
// [1, 2, 3], 4 returns [0, 2]

const funcs = {
  twoSum0: function (numbers, target) {
    arr = [];
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (target - numbers[i] === numbers[j]) {
          arr.push(i, j);
        }
      }
    }

    return arr;
  },
  twoSum: function (numbers, target) {
    // using hashmap for O(N) time ...
    // LOOKING FOR THE COMPLEMENT...
    // nums = [1,5,9]
    // target = 10
    // i=0, val=1 , complement=9 , Map = {1:0}  (we saw 1 at 0 have we seen a 9 b4?)
    // i=1, val=5 , complement=5 , Map = {1:0,5:1}  (we saw 5 at 1 have we seen a 5 b4?)
    // i=2, val=9 , complement=1 , Map = {1:0,5:1,9:2}  (we saw 9 at 2 have we seen a 1 b4?)

    const map = {};
    for (let i = 0; i < numbers.length; i++) {
      let value = numbers[i];
      let complement = target - value;
      if (map[complement] != undefined) {
        return [map[complement], i];
      } else {
        map[value] = i;
      }
    }
  },
};

module.exports = funcs;
