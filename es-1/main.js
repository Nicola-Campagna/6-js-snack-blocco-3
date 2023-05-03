// chiedo all'utente un valore minimo 
const minValue = parseInt(prompt("inserire valore minimo"));
console.log("numero minimo: " + minValue);

// chiedo all'utente un valore massimo
const maxValue = parseInt(prompt("inserire valore massimo"));
console.log("numero massimo: " + maxValue);

// n random da minValue a maxValue
const randomNumber = Math.floor(Math.random() * maxValue + minValue);
console.log("numero generato: " + randomNumber);
alert("numero generato: " + randomNumber);