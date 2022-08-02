const funcs = {
  getLengthOfMissingArray: function (arrayOfArrays) {
    //
    //if (arrayOfArrays.length == 0) return 0;
    // check for falsy values in JavaScript are: false, null, undefined, 0, "" (empty string), NaN
    // for (const value of arrayOfArrays) {
    //   if (value !== null) {
    //     // we're OK, got a truthy val
    //     break;
    //   } else {
    //     return 0;
    //   }
    // }
    //
    // TypeError: Cannot read property 'length' of null
    // at getLengthOfMissingArray
    // also its not iterable so...
    //
    if (!arrayOfArrays || !arrayOfArrays.length) {
      // array or array.length are falsy
      // ⇒ do not attempt to process array
      return 0;
    }
    //
    //get number of items in array, return 0 if 1 (actually question guarantees more)
    if (arrayOfArrays.length <= 1) return 0;
    // new array of lengths, then sort
    lens = new Array();
    for (i = 0; i < arrayOfArrays.length; i++) {
      if (!arrayOfArrays[i]) return 0;
      if (arrayOfArrays[i].length == 0) return 0;
      lens[i] = arrayOfArrays[i].length;
    }
    console.log(lens);
    lens_sorted = lens.sort((a, b) => a - b);
    console.log(lens_sorted);
    for (i = 0; i < lens_sorted.length; i++) {
      if (lens_sorted[i] + 1 !== lens_sorted[i + 1]) return lens_sorted[i] + 1;
    }
  },
};

module.exports = funcs;
