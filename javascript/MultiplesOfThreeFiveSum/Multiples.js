const funcs = {
  solution: function (number) {
    // multiples of 3,5,15
    let threes = Math.max(Math.floor((number - 1) / 3), 0);
    let fives = Math.max(Math.floor((number - 1) / 5), 0);
    let fifteens = Math.max(Math.floor((number - 1) / 15), 0);
    let sum3 = ((threes * (threes + 1)) / 2) * 3;
    let sum5 = ((fives * (fives + 1)) / 2) * 5;
    let sum15 = ((fifteens * (fifteens + 1)) / 2) * 15;
    console.log(`${sum3}, ${sum5}, ${sum15}`);
    return sum3 + sum5 - sum15;
  },
};
module.exports = funcs;
