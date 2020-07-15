/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let text = document.getElementById("target");
  let chars = text.innerText.split("");
  text.innerText = "";

  let count = 0;

  appendchars = () => {
    if (chars[count] === undefined) {
      count = 0;
      text.innerText = "";
    } else {
      let element = document.createElement("span");
      element.innerText = chars[count];

      text.appendChild(element);
      count++;
    }
  };
  (function loopRand() {
    let rand = Math.floor(Math.random() * (400 - 100) + 100);
    setTimeout(function () {
      appendchars();
      loopRand();
    }, rand);
  })();

  //   setInterval(appendchars, 200);
})();
