// chiedo il primo numero
let numeroPrimo = parseInt(prompt("inserire primo numero"));
console.log("numero primo: " + numeroPrimo);

// chiedo il secondo numero
let numeroSecondo = parseInt(prompt("inserire secondo numero"));
console.log("numero secondo: " + numeroSecondo);

// array
const myArray = [
    numeroPrimo,
    numeroSecondo
];


// FINCHE' il numero successivo inserito sia maggiore del numero precedente inserito esegui...
while (numeroSecondo > numeroPrimo) {
    // numero primo diventa il numero inserito per secondo (maggiore del primo)
    numeroPrimo = numeroSecondo;
    // numero inserito per secondo diventeràun nuovo numero ( > dell'ultimo inserito )
    numeroSecondo = parseInt(prompt("inserire nuovamente un altro numero > del precedente"));
    // aggiugo il numero nell'array
    myArray.push(numeroSecondo);
}
if (numeroSecondo < numeroPrimo) {
    alert("gioco terminato");
    // eliminare l'ultimo numero inserito nell'array (perchè è minore del precedente e non lo vogliamo nell'array)
    myArray.pop();
}
console.log(myArray);