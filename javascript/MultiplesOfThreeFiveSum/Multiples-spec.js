// see https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/

// Behaviour Driven Development (BDD)
// Describe [thing]. It should [do something]
// usually expect(actualValue).to.equal.(expectedValue);

// mocha --reporter=nyan flickr-fetcher-spec.js

"use strict";

const chai = require("chai");
const expect = require("chai").expect;
const assert = chai.assert;

const funcs = require("./Multiples.js");
let solution = funcs.solution;

function test(n, expected) {
  let actual = solution(n);
  it(`Expected ${expected}, got ${actual}`, () => {
    assert.strictEqual(actual, expected);
  });
}

describe("basic tests", function () {
  test(10, 23);
  test(1000, 233168);
  test(-1000, 0);
});
