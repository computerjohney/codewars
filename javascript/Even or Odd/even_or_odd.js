const funcs = {
  even_or_odd: function (num) {
    var result = num % 2 == 0 ? "Even" : "Odd";
    return result;
  },
};

module.exports = funcs;

// return number % 2 ? "Odd" : "Even"
