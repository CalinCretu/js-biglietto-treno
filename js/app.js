const PRICE_PER_KM = 0.21
// Richiedere informazioni al cliente:
// - chiedere all'utente il numero di chilometri che vuole percorrere
//  - creare variabile con valore restituito da prompt
const distance = parseFloat(prompt('How many KM are you willing to travel?'));

// - chidere all'utente l'età del passseggero
//  - creare variabile con valore restituito da prompt
const age = parseFloat(prompt('How OLD is the passenger?'));
console.log(distance, age);

// Creare le variabili utilizzate per calcolare il prezzo totale del viaggio:
//  - creare variabile con il prezzo base definito di 0.21 euro al km
let basePrice = (PRICE_PER_KM * distance);
console.log(basePrice);

// - creare variabile con sconto under 18
let discount20 = 20;

// - creare variabile con sconto over 65
let discount40 = 40;

// Calcolare lo sconto
let discount = 0;

// - sconto under 18
if (age < 18) {
    discount = (basePrice * discount20) / 100
    // - sconto over 65
} else if (age > 65) {
    discount = (basePrice * discount40) / 100
}

// Calcolare il prezzo finale
const finalPrice = basePrice - discount;

// stampare nella pagina il prezzo finale del biglietto
const displayedPrice = finalPrice.toFixed(2)

document.getElementById('price').innerHTML = displayedPrice
