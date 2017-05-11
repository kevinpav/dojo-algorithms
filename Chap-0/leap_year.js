// Write a function that determines whether a given year is a leap year.
// If a year is divisible by four, it is a leap year, unless it is divisible by 100.
// However, if it is divisible by 400, then it is.

function is_leap_year(year) {

  // First, check if divisible by 400
  if (year % 400 === 0) {
    return(true);
  } else if (year % 4 === 0 && year % 100 != 0) {
    return(true);
  } else {
    return(false);
  }
}


console.log("2017? " + is_leap_year(2017));
console.log("2016? " + is_leap_year(2016));
console.log("2000? " + is_leap_year(2000));
console.log("2100? " + is_leap_year(2100));