/*This is the JavaScript file that need to be tested through jasmine
Below ist the calculateInsurance function that will return die Insurance costs based on HP and Country*/

function calculateInsurance() {

    var name = document.getElementById("fullname").value;
    var age = parseInt(document.getElementById("age").value);
    var power = parseInt(document.getElementById("hp").value);
    var location = document.getElementById("countryselect").value;
    var car = document.getElementById("modelselect").value;

    if (age >= 85 || age <=17) {
        document.getElementById("output").innerHTML = "Dear " + name + ", sorry we can not insure your car.";
    } else if (power >= 180 || power <= 44) {
        document.getElementById("output").innerHTML = "Dear " + name + ", sorry we can not insure your car.";
    } else if (location == "Austria") {
        result = (((power * 100) / age) + 50);
        document.getElementById("output").innerHTML = "Dear " + name + ", your insurance costs " + Math.round(result) + " €. <br>Because of your " + power + " kW HP car model " + car + " and your age of " + age + ".";
    } else if (location == "Germany") {
        result = (((power * 120) / age) + 100);
        document.getElementById("output").innerHTML = "Dear " + name + ", your insurance costs " + Math.round(result) + " €. <br>Because of your " + power + " kW HP car model " + car + " and your age of " + age + ".";
    } else if (location == "Italy") {
        result = (((power * 150) / (age + 2)) + 100);
        document.getElementById("output").innerHTML = "Dear " + name + ", your insurance costs " + Math.round(result) + " €. <br>Because of your " + power + " kW HP car model " + car + " and your age of " + age + ".";
    }
};

