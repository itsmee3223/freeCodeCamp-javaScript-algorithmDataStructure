let quoteSample = "3 blind mice.";
let myRegex = /[^aiueo^0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line