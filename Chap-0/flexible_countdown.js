// Based from earlier “Countdown By Fours”,
// given (lowNum, highNum, mult),
// print the numbers in multiples of mult
// from highNum down to lowNum,
// using a FOR loop.
//
// Example: For (2,9,3), print 9 6 3 (on successive lines).

function flexCountdown(lowNum, highNum, mult) {

  for (var i=highNum; i >= lowNum; i -= mult) {
    console.log(i);
  }
}


flexCountdown(2,9,3);