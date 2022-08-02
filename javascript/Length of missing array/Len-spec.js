// see https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/

// Behaviour Driven Development (BDD)
// Describe [thing]. It should [do something]
// usually expect(actualValue).to.equal.(expectedValue);

// mocha --reporter=nyan flickr-fetcher-spec.js

"use strict";

const chai = require("chai");
const expect = require("chai").expect;
const assert = chai.assert;

const funcs = require("./Len.js");
const getLengthOfMissingArray = funcs.getLengthOfMissingArray;

// describe("Existence!", function () {
//   it("should exist", function () {
//     var funcs = require("./Len.js");
//     expect(funcs).to.not.be.undefined;
//   });
// });

describe("KataTests", function () {
  it("Basic Tests", function () {
    //Test.assertEquals(
    assert.strictEqual(
      getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
      3
    );
    assert.strictEqual(
      getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
      2
    );
    assert.strictEqual(
      getLengthOfMissingArray([[null], [null, null, null]]),
      2
    );
    assert.strictEqual(
      getLengthOfMissingArray([
        ["a", "a", "a"],
        ["a", "a"],
        ["a", "a", "a", "a"],
        ["a"],
        ["a", "a", "a", "a", "a", "a"],
      ]),
      5
    );

    assert.strictEqual(getLengthOfMissingArray([]), 0);
  });
});

describe("Harder Tests", function () {
  it("Hard Tests", function () {
    //Test.assertEquals(
    assert.strictEqual(
      getLengthOfMissingArray([
        [0, 2, 2, 4, 0],
        [3, 1, 3, 4],
        [3, 1, 0, 0, 0, 2, 3, 1],
        [2, 4, 0, 1, 0, 3, 0],
        [1, 4, 3, 1, 2, 0, 0, 1, 3, 1],
        [2, 4, 4, 1, 4, 3, 1, 1, 1],
        [4, 4, 2, 4, 1, 4, 3, 2, 4, 1, 1],
      ]),
      6
    );
  });
});
