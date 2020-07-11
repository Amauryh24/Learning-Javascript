/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  calculAge = (dob) => {
    let diff_ms = Date.now() - dob.getTime();
    let age = new Date(diff_ms);
    age = Math.abs(age.getUTCFullYear() - 1970);
    return age;
  };

  document.getElementById("run").addEventListener("click", () => {
    let day = document.getElementById("dob-day").value;
    let month = document.getElementById("dob-month").value;
    let year = document.getElementById("dob-year").value;
    let birthday = new Date(year, month, day);

    console.log(calculAge(birthday));
  });
})();
