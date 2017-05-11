// Add odd integers from -300,000 to 300,000,
// and console.log the final sum.
// Is there a shortcut?

// Yes there is a shortcut; you are adding all the positive and negative
// numbers in an equally balanced range. You could just assume the total is 0

var mySum = 0;

for (var i=-300000; i < 300001; i++) {
  if (i % 2 !== 0) {
    mySum += i;
  }
}

console.log(mySum);