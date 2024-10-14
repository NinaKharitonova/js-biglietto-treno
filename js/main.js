// Il programma dovrà chiedere all'utente il numero di chilometri
// che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo
// totale del viaggio, secondo queste regole:

// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana
//   (con massimo due decimali, per indicare centesimi sul prezzo).

//   Questo richiederà un minimo di ricerca.

// # PROCEDURA

// ! RACCONLTA DATI

// * il numero di chilometri che l'utente vuole percorrere
const chilometriPercorsi = prompt("Chilometri che intende percorrere");
// * l'età del passeggero
const etaPasseggero = prompt("Eta del passeggero");

// * preparo una variabile per il messaggio (calcolo il prezzo)
let outputMessage;

// ! ELABORAZIONE

// * il prezzo del biglietto e definito in base a:

// * controllo il prezzo in base ai km (0.21 € al km)

// * controllo se l'utente è minorenne applicare sconto del 20%
// * controllo se l'utente è over 65 applicare sconto del 40%
// * il prezzo finale in decimali

// ! OUTPUT

// * Stampo il prezzo
