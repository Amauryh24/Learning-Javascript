/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  getRandomNumber = () => {
    let nombre = Math.floor(Math.random() * 100 + 1);
    return nombre;
  };

  document.getElementById("run").addEventListener("click", () => {
    let listNumber = [];
    for (let i = 1; i < 11; i++) {
      listNumber.push(getRandomNumber());
      document.getElementById("n-" + i).innerText = listNumber[i - 1];
    }

    document.getElementById("min").innerText = Math.min(...listNumber);
    document.getElementById("max").innerText = Math.max(...listNumber);

    document.getElementById("sum").innerText = listNumber.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    document.getElementById("average").innerText = listNumber.reduce(
      (acc, currentValue) => acc + currentValue / listNumber.length,
      0
    );
    // document.getElementById("min").innerText = Math.max(...listNumber);
  });
})();
