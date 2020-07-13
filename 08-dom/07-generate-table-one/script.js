/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let target = document.getElementById("target");
  let table = document.createElement("table");
  target.appendChild(table);
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);
    let col = document.createElement("td");
    col.innerText = i + 1;
    row.appendChild(col);
  }

  console.log(target);
})();
