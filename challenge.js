// Good Luck! You got this 💪🏾
// Write your code here.

function calculator(num1, num2, operator) {
    let answer;
    
    if (operator === "+") {
        answer = num1 + num2;
    } else if (operator === "-") {
        answer = num1 - num2;
    } else if (operator === "*") {
        answer = num1 * num2;
    } else if (operator === "/") {
        answer = num1 / num2;
    } else {
      console.log("Invalid operator.");
      return;
    }
    
    console.log("Result: " + answer);
  }
  
  // Example usage
  calculator(5, 2, "+"); // Output: Result: 7
  calculator(5, 2, "-"); // Output: Result: 3
  calculator(5, 2, "*"); // Output: Result: 10
  calculator(5, 2, "/"); // Output: Result: 2.5
  calculator(5, 2, "%"); // Output: Invalid operator.