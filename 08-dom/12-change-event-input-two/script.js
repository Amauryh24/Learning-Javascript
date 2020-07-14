/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let pass = document.getElementById("pass-one");
  let re = /[0-9]/g;

  pass.addEventListener("input", (event) => {
    let result = event.target.value.match(re);
    if (result !== null) {
      if (event.target.value.length > 7 && result.length > 1) {
        console.log("ok");
        document.getElementById("validity").innerText = "ok";
      } else {
        document.getElementById("validity").innerText = "Pas ok";
      }
    }
  });
})();
