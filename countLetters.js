function countLetters(str){
  str = str.split(' ').join("");
  var objLetterCount = {};
  //console.log(str);
  //var obj = Object.assign({},str);
  //3. for loop to count each letter
  for (var i = 0; i < str.length; i++){

  var letterCount = 0;

    for (var j = 0; j < str.length; j++){
      if (str[i] === str[j]){
        letterCount += 1;
      }
    }
    objLetterCount[str[i]] = letterCount;

  }
  //console.log(objLetterCount)
  return objLetterCount;
}

console.log(countLetters("lighthouse in the house"));