/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: prompt & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let answer = prompt("Tu veux du gâteau ?");
  if (answer == "oui") {
    alert("bravo");
  } else {
    alert("du gâteau, ça ne se refuse pas !");
  }
})();
