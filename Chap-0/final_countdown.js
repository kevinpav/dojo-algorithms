// This is based on “Flexible Countdown”.
// The parameter names are not as helpful,
// but the problem is essentially identical; don’t be thrown off!
//
// Given 4 parameters (param1,param2,param3,param4),
// print the multiples of param1, starting at param2
// and extending to param3.
// One exception: if a multiple is equal to param4,
// then skip (don’t print) that one.
// Do this using a WHILE loop.
//
// Example: Given (3,5,17,9), print 6,12,15
// (which are all of the multiples of 3 between 5 and 17, except for the value 9).

function finalCountdown(mult, lowNum, highNum, numSkip) {

  var i = lowNum;

  // Count from lowNum to highNum using mult
  while (i <= highNum) {
    // If i is a multiple of mult and i <> multSkip, console.log i
    if (i % mult === 0 && i !== numSkip)  {
      console.log(i);
    }
    i ++;
  }

}


finalCountdown(3,5,17,9);