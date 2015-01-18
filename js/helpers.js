// Generated by CoffeeScript 1.8.0
var $, arr_comp, def_comp, intersec_arrays, log, random_int;

log = function(str) {
  return console.log(str);
};

$ = function(id) {
  return document.getElementById(id);
};

random_int = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

def_comp = function(a, b) {
  return a === b;
};

arr_comp = function(a, b) {
  return a[0] === b[0] && a[1] === b[1];
};

intersec_arrays = function(A, B, comparator) {
  var a, b, c, d, i, _i, _j, _k, _len, _len1, _len2;
  if (comparator == null) {
    comparator = def_comp;
  }
  c = [];
  d = A.slice();
  for (i = _i = 0, _len = A.length; _i < _len; i = ++_i) {
    a = A[i];
    for (_j = 0, _len1 = B.length; _j < _len1; _j++) {
      b = B[_j];
      if (comparator(a, b)) {
        d[i] = false;
      }
    }
  }
  for (_k = 0, _len2 = d.length; _k < _len2; _k++) {
    a = d[_k];
    if (a) {
      c[c.length] = a;
    }
  }
  return c;
};
