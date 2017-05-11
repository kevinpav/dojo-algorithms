// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day....",
// Example: given yourBirthday(4,19) or yourBirthday(19,4)

function yourBirthday(month, day) {
  // Set "my" birth month and day, for testing in the if loop below
  var myMonth = 9;
  var myDay = 12;

  // First, check if month is valid.
  if (month < 1 || month > 12) {
    return("Sorry month is out of range: " + month);
  } else if (day < 1 || day > 31) { // For this example assume simple > 31 days
    return("Sorry day is out of range: " + day);
  } else if (month == myMonth && day == myDay) {
    return("How did you know?");
  } else {
    return("Just another day....");
  }
}

// Make the function calls with test data
console.log(yourBirthday(4,19));
console.log(yourBirthday(19,4));
console.log(yourBirthday(9,12));