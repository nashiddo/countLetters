/* {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}*/

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

console.log(countLetters('lighthouse in the house'));

