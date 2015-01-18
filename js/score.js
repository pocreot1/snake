// Generated by CoffeeScript 1.8.0
var Score;

Score = (function() {
  Score.prototype.value = 0;

  function Score(game, tag) {
    this.game = game;
    this.tag = tag;
  }

  Score.prototype.next = function() {
    this.value += this.game.SPEED;
    return this.tag.textContent = this.value;
  };

  return Score;

})();