// see https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/

// Behaviour Driven Development (BDD)
// Describe [thing]. It should [do something]
// usually expect(actualValue).to.equal.(expectedValue);

// mocha --reporter=nyan flickr-fetcher-spec.js

"use strict";

const chai = require("chai");
const expect = require("chai").expect;
const assert = chai.assert;

const funcs = require("./TwoSum.js");
let twoSum = funcs.twoSum;
// let actual = twoSum([1, 2, 3], 4);
// console.log(actual);

//
chai.config.truncateThreshold = 0;

describe("Sample Tests", function () {
  const testCases = [
    [[1, 2, 3], 4, [0, 2]],
    [[1234, 5678, 9012], 14690, [1, 2]],
    [[2, 2, 3], 4, [0, 1]],
    [[2, 3, 1], 4, [1, 2]],
  ];
  for (const [numbers, target, expected] of testCases)
    it(`Testing for numbers = [${numbers.join(
      ", "
    )}], target = ${target}`, () => check(numbers, target, expected));

  const numericalCompare = (a, b) => a - b;
  function check(arr, target, expected) {
    let actual = twoSum(arr.slice(), target);
    assert.isArray(actual);
    assert.deepEqual(actual.sort(numericalCompare), expected);
  }
});
