console.log("hello from the browser"); 

console.log(4+5);
console.log("4 + 5"); 
console.log("4" + "5"); 


const firstname = prompt("Enter your first name:");
const lastname = prompt ("And your last name:"); 
const name = firstname + " " + lastname; 
alert(`Hello, ${name}`);



let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);


const price = prompt("please insert your product price without vat"); 
const prozentsatz = 0.20;
const prozentwert = Number(price) * prozentsatz;
const total = prozentwert + Number(price); 
console.log(total); 


let usercelsius = prompt ("Please enter the Grad Celsius degrees from your location");
let convertierung = Number(usercelsius) * (9/5) + 32; 
alert(`Hello, ${convertierung}`);


let number1 =5;
let number2 = 3; 

[number1, number2] = [number2, number1]; 

console.log(number1); 