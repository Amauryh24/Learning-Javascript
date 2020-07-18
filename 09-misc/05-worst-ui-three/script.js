/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  var slot1;
  var slot2;
  var slot3;
  var slot4;
  mySlots = {
    myButtons: ["part-one", "part-two", "part-three", "part-four"],
    myLabels: [
      "fix-part-one",
      "fix-part-two",
      "fix-part-three",
      "fix-part-four",
    ],
  };
  window.addEventListener("load", () => {
    mySlots.myButtons.forEach((el) => {
      slotInterval(el);
    });
  });

  function slotInterval(el) {
    if (el === "part-one") slot1 = setInterval(playSlot, 100, el);
    if (el === "part-two") slot2 = setInterval(playSlot, 100, el);
    if (el === "part-three") slot3 = setInterval(playSlot, 100, el);
    if (el === "part-four") slot4 = setInterval(playSlot, 100, el);
  }

  function playSlot(el) {
    let input = document.getElementById(el);
    let minData = input.getAttribute("data-min");
    let maxData = input.getAttribute("data-max");
    let value = parseInt(input.value) + 1;
    if (input.value >= maxData) {
      input.value = minData;
    } else {
      input.value < 9 ? (input.value = "0" + value) : (input.value = value);
    }

    let btn1 = document.getElementById("part-one").value;
    let btn2 = document.getElementById("part-two").value;
    let btn3 = document.getElementById("part-three").value;
    let btn4 = document.getElementById("part-four").value;
    target.innerText = `+${btn1}${btn2}${btn3}${btn4}`;
  }

  stopPlayElement = (btn, label) => {
    document.getElementById(btn).addEventListener("click", (e) => {
      stopPlaySlot = (el) => {
        if (e.target.innerText === "Play") {
          e.target.innerText = "Stop";
          slotInterval(label);
        } else {
          clearInterval(el);
          e.target.innerText = "Play";
        }
      };

      if (btn === "fix-part-one") stopPlaySlot(slot1);
      if (btn === "fix-part-two") stopPlaySlot(slot2);
      if (btn === "fix-part-three") stopPlaySlot(slot3);
      if (btn === "fix-part-four") stopPlaySlot(slot4);
    });
  };

  for (let i = 0; i < mySlots.myButtons.length; i++) {
    stopPlayElement(mySlots.myLabels[i], mySlots.myButtons[i]);
  }
})();
