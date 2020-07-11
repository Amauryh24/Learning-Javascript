/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value
  function operation(op) {
    let opOne = document.getElementById("op-one").value;
    let opTwo = document.getElementById("op-two").value;
    result = eval(opOne + op + opTwo);
    alert(result);
  }

  document.getElementById("addition").addEventListener("click", () => {
    // perform an addition
    operation("+");
  });

  document.getElementById("substraction").addEventListener("click", () => {
    // perform an substraction
    operation("-");
  });

  document.getElementById("multiplication").addEventListener("click", () => {
    // perform an multiplication
    operation("*");
  });

  document.getElementById("division").addEventListener("click", () => {
    // perform an division
    operation("/");
  });
})();
