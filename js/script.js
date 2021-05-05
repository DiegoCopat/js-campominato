/* 
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito. 
*/

// SEZIONE DI GENERAZIONE DEI FIORI
var flowerArray = [];
var attempts = [];
var maxAttempts = 84;
maxAttempts = 5;
var score = [];

while (flowerArray.length < 16) {
    var flower = numberFlower (1, 100);
    if (!inArray(flower, flowerArray)) {
        flowerArray.push(flower);
        
    }
    // console.log(flower, flowerArray.length);
}
 
console.log(flowerArray); // /SEZIONE DI GENERAZIONE DEI FIORI

// SEZIONE DEDICATA AL GIOCO
var gameOver = false
while (attempts.length < maxAttempts && gameOver == false) {
    var number = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
    // il gameOver diventa true quando il numero è contenuto nel flowerArray
    if (inArray (number, flowerArray)) {
        gameOver = true;
        alert("GAME OVER\n Hai trovato un fiore. Il tuo punteggio finale è di " + attempts.length);
    }else if (!inArray (number, attempts)) {
        attempts.push(number);
    }
    
console.log(number, attempts.length);
}
if (attempts.length == maxAttempts) {
    alert("COMPLIMENTI! \n Sei riuscito a completare il gioco. Il tuo punteggio finale è di " + attempts.length);
}
// SEZIONE DEDICATA AL GIOCO


// -------------------- SEZIONE DEDICATA ALLE FUNZIONI ---------------------

    // funzione per generare i numeri casuali dei fiori
function numberFlower (min, max) {

    var numeri = parseInt(Math.floor(Math.random() * max - min + 1)) + min;
    return numeri;
}

// funzione per verificare se un numero già è presente nell'array
function inArray (number, array) {

    for (i = 0; i < array.length; i++) {

        if (number == array[i]) {
            return true; 
        }

    }
    return false;
}

// -------------------- SEZIONE DEDICATA ALLE FUNZIONI ---------------------

