// Print all integer multiples of 5, from 512 to 4096.
// Afterward, also log how many there were.

var num5s = 0;

for (var i=512; i<4097; i++) {
  if (i % 5 === 0) {
    console.log(i);
    num5s++;
  }
}

console.log("There were " + num5s + " numbers with multiples of 5.");