/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    let year = document.getElementById("year").value;

    month13Friday = {
      days: 0,
      months: [],
    };

    for (let month = 0; month < 12; month++) {
      let date = new Date(year, month, 13);
      if (date.getDay() == 5) {
        month13Friday.days++;
        month13Friday.months.push(
          date.toLocaleDateString("default", { month: "long" })
        );
      }
    }
    console.log(month13Friday);
    alert(Object.values(month13Friday.months));
  });
})();
