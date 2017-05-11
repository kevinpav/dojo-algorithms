// Print multiples of 6 up to 60,000, using a WHILE.

var num6s = 0;
var i = 1;


while (i < 60001) {
  if (i % 6 === 0) {
    console.log(i);
    num6s++;
  }
}

console.log("There were " + num6s + " numbers with multiples of 6.");