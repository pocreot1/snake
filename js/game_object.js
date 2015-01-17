// Generated by CoffeeScript 1.8.0
var GameObject;

GameObject = (function() {
  function GameObject() {}

  GameObject.prototype.points = [];

  GameObject.prototype.color = "#fff";

  GameObject.prototype.draw = function(points, color) {
    var point, _i, _len;
    if (points == null) {
      points = this.points;
    }
    if (color == null) {
      color = this.color;
    }
    this.game.g.fillStyle = color;
    for (_i = 0, _len = points.length; _i < _len; _i++) {
      point = points[_i];
      this.game.g.fillRect(point[0] * this.game.size + 1, point[1] * this.game.size + 1, this.game.point_size, this.game.point_size);
    }
  };

  return GameObject;

})();
