// array
const myArray = [];
// chiedo il primo numero
let numeroPrimo = parseInt(prompt("inserire primo numero"));
console.log("numero primo: " + numeroPrimo);

// chiedo il secondo numero
let numeroSecondo = parseInt(prompt("inserire secondo numero"));
console.log("numero secondo: " + numeroSecondo);


while (numeroSecondo > numeroPrimo) {
    numeroPrimo = numeroSecondo;
    numeroSecondo = parseInt(prompt("inserire nuovamente un altro numero"));
    myArray.push(numeroSecondo);
}
console.log(myArray);