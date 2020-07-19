/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let randNumber;
  let answer;
  let essais = 0;
  randomNumber = () => {
    return Math.floor(Math.random() * (100 - 1) + 1);
  };
  addEventListener("load", () => {
    initGame();
    game();
  });
  initGame = () => {
    essais = 0;
    randNumber = randomNumber();
    answer = prompt(
      "Bienvenue à guessNumber\nTrouver le numéro entre 1 et 100"
    );
  };
  playagain = () => {
    answer = confirm("Voulez-vous rejouer ? ");
    if (answer == true) {
      initGame();
      game();
    } else {
      answer = null;
      alert("Au revoir");
    }
  };
  game = () => {
    while (answer != null) {
      while (isNaN(answer) || answer > 100 || answer < 1) {
        answer = prompt("Entrez uniquement un numéro entre 1 et 100");
      }
      if (answer < randNumber) {
        answer = prompt("plus grand");
        essais++;
      } else if (answer > randNumber) {
        answer = prompt("plus petit");
        essais++;
      } else if (answer == randNumber) {
        answer == null;
        essais++;
        alert("Bravo, vous avez gagné! nombre d'essais:" + essais);
        playagain();
      }
    }
  };
})();
