// Generated by CoffeeScript 1.8.0
var $, log, random_int;

log = function(str) {
  return console.log(str);
};

$ = function(id) {
  return document.getElementById(id);
};

random_int = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
