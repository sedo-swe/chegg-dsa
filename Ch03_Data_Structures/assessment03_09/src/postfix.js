const Stack = require("./lib/stack");

const evaluate = (expression) => {
  const operators = "+-*/";
  const stack = new Stack();
  
  expression = expression.replace(/\s/g, "");
  for (let i=0, limit=expression.length; i<limit; i++) {
    if (operators.includes(expression[i])) {
      let right = stack.pop();
      let left = stack.pop();
      let calc = 0;
      if (expression[i] === "+")
        calc = Number(left) + Number(right);
      else if (expression[i] === "-")
        calc = Number(left) - Number(right);
      else if (expression[i] === "*")
        calc = Number(left) * Number(right);
      else {
        calc = Number(left) / Number(right);
      }
      stack.push(calc);
    } else {
      stack.push(expression[i]);
    }
  }
  return Number(stack.pop());
};

console.log(evaluate("2 3 +"));
console.log(evaluate("2 3 + 2 *"));

module.exports = evaluate;
