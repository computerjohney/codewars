// see https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/

// Behaviour Driven Development (BDD)
// Describe [thing]. It should [do something]
// usually expect(actualValue).to.equal.(expectedValue);

// mocha --reporter=nyan flickr-fetcher-spec.js

"use strict";

const chai = require("chai");
const expect = require("chai").expect;
const assert = chai.assert;

const funcs = require("./even_or_odd.js");
const even_or_odd = funcs.even_or_odd;

// describe("Existence!", function () {
//   it("should exist", function () {
//     var funcs = require("./even_or_odd.js");
//     expect(funcs).to.not.be.undefined;
//   });
// });

describe("Sample tests", () => {
  it("2 is even", () => {
    assert.strictEqual(even_or_odd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(even_or_odd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(even_or_odd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(even_or_odd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(even_or_odd(0), "Even");
  });
});
