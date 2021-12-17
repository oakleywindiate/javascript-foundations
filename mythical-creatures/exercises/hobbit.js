class Hobbit {
  constructor(hobbit, age, adult, old, hasRing) {
    this.name = hobbit.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = true;
  }
  celebrateBirthday() {
    this.age++
    if (this.age > 32) {
    this.adult = true;
    }
    if (this.age >= 101) {
      this.old = true;
    }
  }
  getRing() {
    if (this.name === "Frodo") {
      this.hasRing === true;
    }
    if (this.hasRing === true) {
      return "Here is the ring!"
    }
    if (this.hasRing === false) {
      return "You can\'t have it!"
    }
  }
}





 module.exports = Hobbit;
