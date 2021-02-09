//Requiring libraries needed for assertion
const chai = require('chai');
const { assert } = chai;

//Requiring the js file for test
const fibonacci = require('../fibonacci');

/*describe() block:- takes in 2 parameters -the description and 
the function that will contain the tests.*/

/*it() block:- conatins the test code*/

describe("Fibonacci tests using fibonacci.js  \n", () => {
  //Valid inputs
  describe("Valid inputs", () => {
    it("should return 0 as the 1st Fibonacci number", () => {
      assert.equal(0, fibonacci(0))
    })
    it("should return 5 as the 5th Fibonacci number \n", () => {
      assert.equal(5, fibonacci(5))
    })
  })
  //Invalid inputs
  describe("Invalid inputs", () => {
    it("Undefined, number should be >=1", () => {
      assert.equal(fibonacci(-5), "undefined")
    })
    it("Undefined, method only takes in numbers", () => {
      assert.equal(fibonacci('TDD'), "undefined")
    })
  })
})