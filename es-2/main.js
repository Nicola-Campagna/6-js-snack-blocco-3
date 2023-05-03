// array
const myArray = [];

// ciclo while
let i = 0;
let somma = 0;

while (somma < 50) {
    const currentNumber = myArray[i];
    // chiedo all'utente un numero da inserire nell'array
    const number = parseInt(prompt("inserire numero da inserire nell'array"));
    // aggiungo il numero all'array
    myArray.push(number);
    console.log("numeri array: " + currentNumber);
    // sommo gli elementi 
    somma += currentNumber;
    console.log("somma elementi: " + somma);

    if (somma > 50) {
        alert("somma elementi > di 50");
    }

    i++;
}