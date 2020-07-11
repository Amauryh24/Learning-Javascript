/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let confirmInfos = false;
  while (confirmInfos == false) {
    let age = prompt("Quel est ton âge ?");
    let sexe = prompt("Quel est ton sexe ?");
    let ville = prompt("Quelle est ta ville ?");
    confirmInfos = confirm(age + ", " + sexe + ", " + ville);
  }
})();
