var missing_n = function(array) {
  var check = array.sort();
  for (var i in check) {
    do {
      check.shift();
    } while (i === check[i] -1);
  };
  console.log(check[0] - 1);
};

//DESTRUCTIVE

function missing_n(v) {
  var len = v.length + 1;
  var sum = len * (len + 1) / 2;
  for (var i = 0; i < len - 1; i++) {
    sum -= v[i];
  }
  console.log(sum);
};
