/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  let count = 0;
  let idArray = ["part-one", "part-two", "part-three", "part-four"];
  console.log(target);
  phoneclicker = (el) => {
    document.getElementById(el).addEventListener("click", (e) => {
      let minData = e.target.getAttribute("data-min");
      let maxData = e.target.getAttribute("data-max");
      count = e.target.innerText;
      count++;
      if (count > parseInt(maxData)) {
        e.target.innerText = minData;
        count = 0;
      } else {
        count < 10
          ? (e.target.innerText = "0" + count)
          : (e.target.innerText = count);
      }
      // display phone
      btn1 = document.getElementById("part-one").innerText;
      btn2 = document.getElementById("part-two").innerText;
      btn3 = document.getElementById("part-three").innerText;
      btn4 = document.getElementById("part-four").innerText;
      target.innerText = `+${btn1}${btn2}${btn3}${btn4}`;
    });
  };
  idArray.forEach((element) => {
    phoneclicker(element);
  });
})();
