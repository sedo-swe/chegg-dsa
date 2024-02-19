const Stack = require("./lib/stack");

const pairs = {
    ")" : "(",
    "}" : "{",
    "]" : "["
}

const match = (expression) => {
  const stack = new Stack();
  for (let i=0, limit=expression.length; i<limit; i++) {
    if ("({[".includes(expression[i]))
      stack.push(expression[i]);
    else {
      if (")}]".includes(expression[i])) {
        if (stack.top && stack.top.value === pairs[expression[i]])
            stack.pop();
        else
            return false;
      }
        
    }
  }
  if (stack.top)
    return false;
  else
    return true;
};

// console.log(match("(()"));
// console.log(match("()"));
console.log(match("(())"));
console.log(match("()()"));
console.log(match("a + [{b + ]c} + d"));
console.log(match("([])"));


module.exports = match;
