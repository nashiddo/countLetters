/*var countLetters={};
var repeats=[];
str='lighthouse in the house';

for(x = 0, length = str.length; x < length; x++){
  var l = str.charAt(x);
  countLetters[l]= (isNaN(countLetters[l]) ? 1 : countLetters[l]+1);


}
console.log(countLetters);
*/

function countLetters(string) {
var count= {};
for (var i=0; i<string.length;i++) {
    var character = string.charAt(i);
    if (count[character]) {
       count[character]++;
    } else {
       count[character] = 1;
    }
}

return count;
}

countLetters('lighthouse in the house');

