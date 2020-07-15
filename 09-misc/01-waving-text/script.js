/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let text = document.getElementById("target");
  const chars = text.innerText.split("");
  text.innerText = "";
  let countTrick = 2;

  style = (el, index, countTrick, number) => {
    el.style.fontSize = index - countTrick + number + "px";
    el.style.display = "inline-block";
    el.style.transform = `translateY(${index - countTrick + number - 20}px)`;
  };

  for (let i = 0; i < chars.length; i++) {
    let element = document.createElement("span");
    element.innerText = chars[i];
    text.appendChild(element);
    if (i >= 0 && i < chars.length / 4) {
      style(element, i, 0, 10);
    }
    if (i > chars.length / 4 && i < chars.length / 2) {
      style(element, i, countTrick, 10);
      countTrick += 2;
    }
    if (i > chars.length / 2 && i < (chars.length * 3) / 4) {
      style(element, i, countTrick, 10);
    }
    if (i > (chars.length * 3) / 4) {
      style(element, i, countTrick, 10);
      countTrick += 2;
    }
  }
})();
