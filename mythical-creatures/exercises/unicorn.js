class Unicorn {
  constructor(name, color, isWhite, says) {
    this.name = name;
    this.color = color || "white";
    this.isWhite = function() {
      return false;
    }
    this.says = function(quote) {
      return "**;* " + quote + " *;**";
      }
    }
  }

module.exports = Unicorn;
