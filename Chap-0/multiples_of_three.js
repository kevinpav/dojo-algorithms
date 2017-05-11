// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for (var i=-300; i < 1; i+=3) {
  // Chose to use continue here. Could have NOT-ed the test as well, and put the console.log inside the if.
  if (i==3 || i==6) {
    continue;
  }
  console.log(i);

  // Another approach.
  // if (i!=3 && i!=6) {
  //   console.log(i);
  // }
}