/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    //getter
    get name() {
      return `${this.firstname}${this.lastname}`;
    }
    //setter
    set name(p) {
      return `${this.firstname} ${this.lastname}`;
    }
  }

  document.getElementById("run").addEventListener("click", () => {
    person1 = new Person("Amaury", "Henrottay");
    console.log(person1.name());
    person1 = new Person("Yvon", "Henrottay");
    console.log(person1);
  });
})();
