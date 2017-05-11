// Print integers 1 to 100.
// If divisible by 5, print "Coding" instead.
// If by 10, also print " Dojo".

for (i = 1; i < 101; i++) {
  if (i % 5 === 0) {
    console.log("Coding");
    // Wasn't sure if there was an "easy" way to output on same line.
    // Could do with an additional print variable. But didn't want to
    // overcomplicate the challenge.
    if (i % 10 === 0) {
      console.log(" Dojo");
    }
  }
}