/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let pass = document.getElementById("pass-one");
  pass.setAttribute("maxlength", 10);

  pass.addEventListener("input", (event) => {
    document.getElementById("counter").innerHTML =
      event.target.value.length + "/10";
  });
})();
