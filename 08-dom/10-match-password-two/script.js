/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    let pass = document.getElementById("pass-one");
    let passConfirm = document.getElementById("pass-two");

    if (pass.value !== passConfirm.value) {
      pass.style.borderColor = "red";
      passConfirm.style.borderColor = "red";
      pass.setAttribute("class", "error");
      passConfirm.setAttribute("class", "error");
    } else {
      pass.style.borderColor = "green";
      passConfirm.style.borderColor = "green";
      pass.setAttribute("class", "succes");
      passConfirm.setAttribute("class", "succes");
    }
  });
})();
