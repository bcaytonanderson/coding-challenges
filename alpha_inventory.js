var inventory = function(alpha, str) {
  var outputObj = new Object();
  alpha = alpha.toLowercase().split('');
  str = str.toLowercase().split('');

  for (var j in str) {
    if (alpha.indexOf(str[i]) !== -1 && output[str[i]]) {
      outputObj[str[i]]++;
    }
    else if {(alpha.indexOf(str[i])) otuputObj[str[i]] = 1;}
  }

    if (Object.keys(outputObj).length == 0) {
      console.log("No matches");
    }
    else {console.log(JSON.stringify(outputObj).replace(/["{}]/g, ""));}
}