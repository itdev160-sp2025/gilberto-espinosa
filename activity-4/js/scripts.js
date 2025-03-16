//Greeting
var user = 'Gilberto';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the lastest reviews for dawn dish soap.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//Prices
var price = 2, studentDiscount = .25, studentPrice = price - (price * studentDiscount), priceEl = document.getElementById('price'), studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);