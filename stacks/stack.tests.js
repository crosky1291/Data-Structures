const chai = require("chai");
const assert = chai.assert;
const Stack = require("./stack.js");

describe("Stack", function() {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });

  it("should have a push, pop, peek, and clear method", function() {
    assert.property(stack, "push");
    assert.property(stack, "pop");
    assert.property(stack, "peek");
    assert.property(stack, "clear");
  });

  it("should push elements to top of stack", function() {
    stack.push("hello");
    stack.push(25);
    assert.equal(stack.storage[0], "hello");
    assert.equal(stack.storage[1], 25);
  });

  it("should pop most recently pushed elements", function() {
    stack.push(5);
    stack.push(10);
    assert.equal(stack.pop(), 10);
    assert.equal(stack.pop(), 5);
  });

  it("should return undefined when popping empty stack", function() {
    assert.equal(stack.pop(), undefined);
  });

  it("should show the top item in the stack", function() {
    stack.push(2);
    stack.push(4);
    assert.equal(stack.peek(), 4);
    stack.pop()
    assert.equal(stack.peek(), 2);
  });

  it("should clear the stack", function() {
    stack.push("hello");
    stack.clear();
    assert.deepEqual(stack.storage, {});
    assert.equal(stack.index, 0);
  });
  
});
