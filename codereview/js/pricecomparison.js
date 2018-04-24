var ProductOne = "trip to London";
var ProductTwo = "trip to Amsterdam";
var PriceOne = 149;
var PriceTwo = 270;
var Discont = 41.9;
var sum = (PriceOne + PriceTwo);
document.write("If you want buy a " + ProductOne + " and a " + ProductTwo + ", it costs " + sum + " EUR. <br>");

var calculate = (PriceOne + PriceTwo - Discont);
document.write ("If you want buy a "+ ProductOne +" and a " + ProductTwo + ", as a Golden Card holder, you will geht a 10% discount "+ calculate + " EUR.");