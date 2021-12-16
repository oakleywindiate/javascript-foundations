class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
    }
    says(quote) {
      return "**;* " + quote + " *;**";
    }
    isWhite() {
      return false;
    }
  }

module.exports = Unicorn;
