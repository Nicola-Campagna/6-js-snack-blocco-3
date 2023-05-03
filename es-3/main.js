// chiedo all'utente di inserire un numero
const n = parseInt(prompt("inserire un numero"));

// genero n array
for (let i = 0; i < n; i++) {
    // crea un array
    const array = [];
    // genera 10 numeri random e aggiungiamoli nell'array
    for (let i = 0; i < 10; i++) {
        // n random da 1 a 10
        const randomNumber = Math.floor(Math.random() * 100 + 1);
        // aggiungo all'array
        array.push(randomNumber);
    }

    console.log(array);

}
