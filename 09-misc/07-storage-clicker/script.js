/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let target = document.getElementById("target");
  count = 0;
  window.addEventListener("load", () => {
    count = localStorage.getItem("myCount");
    target.innerText = count;
  });
  document.getElementById("increment").addEventListener("click", () => {
    count++;
    target.innerText = count;
    localStorage.setItem("myCount", count);
  });
})();
