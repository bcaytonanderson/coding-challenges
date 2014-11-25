var anagrams = function (str1, str2) {
  str1 = str1.replace(/\s/g, '');
  str2 = str2.replace(/\s/g, '');
  if (str1.length !== str2.length) {
    console.log("NO");
    return false;
  }
  
}