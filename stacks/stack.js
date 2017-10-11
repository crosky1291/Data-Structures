// Build a stack - with the following methods:

//Push: Inserts an an item at the top of the Stack.
//Pop: Removes and returns the item at the top of the Stack.
//Peek: Returns the item at the top of the Stack without removing it.
//Clear: Removes all items from the Stack.
//do not use any native array methods
class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(el) {
    this.storage[this.index++] = el;
  }

  pop() {
    if (this.index === 0) return undefined;

    let top = this.storage[--this.index];
    delete this.storage[this.index];
    return top;
  }

  peek() {
    return this.storage[this.index - 1];
  }

  clear() {
    this.storage = {};
    this.index = 0;
  }
}

module.exports = Stack;