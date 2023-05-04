// array
const myArray = [];

// ciclo while
let somma = 0;

while (somma < 50) {
    // chiedo all'utente un numero da inserire nell'array
    const number = parseInt(prompt("inserire numero da inserire nell'array < 50"));
    // aggiungo il numero all'array
    myArray.push(number);
    console.log("numeri array: " + myArray);
    // sommo gli elementi 
    somma += number;
    console.log("somma elementi: " + somma);
}
// SE la somma è > di 50 stoppa il giro del ciclo e invia un alert
if (somma > 50) {
    alert("STOP! somma elementi > di 50");
}

console.log(myArray);