// Richiedere informazioni al cliente:
// - chiedere all'utente il numero di chilometri che vuole percorrere
//  - creare variabile con valore restituito da prompt
let distance = prompt('How many KM are you willing to travel?');
console.log(distance);

// - chidere all'utente l'età del passseggero
//  - creare variabile con valore restituito da prompt
let age = prompt('How OLD is the passenger?');
console.log(age);

// Creare le variabili utilizzate per calcolare il prezzo totale del viaggio:
//  - creare variabile con il prezzo base definito di 0.21 euro al km
let basePrice = (0.21 * distance);
console.log(basePrice);

// - creare variabile con sconto di 20% applicato se il cliente ha meno di 18 anni
let discount20 = (basePrice - basePrice * 0.2);
console.log(discount20);

// - creare variabile con sconto di 40% applicato se il cliente ha piu' di 65 anni
let discount40 = (basePrice - basePrice * 0.4);
console.log(discount40);

// - Calcolare il prezzo finale del biglietto a seconda dei prompt:
//  - creare condizione con cliente di eta' inferiore a 18 anni
if (age <= 18) {
    const messageDomElement = document.getElementById('price');
    messageDomElement.innerHTML = discount20.toFixed(2);
    console.log(discount20);
}
// creare condizione con cliente di eta' superiore a 65 anni
else if (age >= 65) {
    const messageDomElement = document.getElementById('price');
    messageDomElement.innerHTML = discount40.toFixed(2);
    console.log(discount40);
}
// - creare condizione con cliente di eta' compresa tra 18 e 65 anni
else {
    const messageDomElement = document.getElementById('price');
    messageDomElement.innerHTML = basePrice.toFixed(2);
    console.log(basePrice);
}