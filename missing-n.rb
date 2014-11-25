def missing_n(array)
  
end


var missing_n = function(array) {
  for (i in array) {
    do {
      array.shift();
    } while i < array[i];
  }
  console.log(array[0]);
}
