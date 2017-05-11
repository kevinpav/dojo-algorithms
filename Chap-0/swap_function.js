// Set variable myNumber to 42. Set variable myName to your name. Now swap myNumber into myName & vice versa.

function swap() {
  var myNumber = 42;
  var myName = "Kevin";

  console.log("MyNumber: " + myNumber + "  myName: " + myName);
  
  var temp = myNumber;
  myNumber = myName;
  myName = temp;

  console.log("MyNumber: " + myNumber + "  myName: " + myName);

  return;
}

