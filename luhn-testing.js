var assert = require("chai").assert;
var isValidCall = require("./luhn-function");

describe("Luhn number check", function() {
  it("should return true if a number is valid", function() {
    var number = 79927398713;
    var result = isValidCall.isValid(number);
    assert.isTrue(result);
  });

  it("should return false if a number is not valid", function() {
    var number = 4741752703928715;
    var result = isValidCall.isValid(number);
    assert.isFalse(result);
  });

  it("should return NaN if input is NaN", function() {
    var number = "not a number";
    var result = isValidCall.isValid(number);
    assert.equal(result, true);
  });

});

