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
const chilometriPercorsi = parseFloat(
  prompt("Chilometri che intende percorrere")
);

// * controllo che sia valida
const isChilometriPercorsiValid =
  !isNaN(chilometriPercorsi) && chilometriPercorsi > 0;
if (!isChilometriPercorsiValid) {
  alert("Il valore inserito non è valido");
}
console.log(chilometriPercorsi);

// * l'età del passeggero
const etaPasseggero = parseInt(prompt("Eta del passeggero"));

// * controllo che sia valida
const isetaPasseggeroValid = !isNaN(etaPasseggero) && etaPasseggero > 0;
if (!isetaPasseggeroValid) {
  alert("Il valore inserito non è valido");
}

console.log(etaPasseggero);

// * preparo una variabile per il messaggio (calcolo il prezzo)
let outputMessage;

// ! ELABORAZIONE

// * il prezzo del biglietto e definito in base a:

// * controllo il prezzo in base ai km (0.21 € al km)

const prezzoKm = 0.21;

let prezzoIniziale = chilometriPercorsi * prezzoKm;

console.log(prezzoIniziale);

// * controllo se l'utente è minorenne applicare sconto del 20% se invece è over 65 applicare sconto del 40%

if (etaPasseggero < 18) {
  sconto = (prezzoIniziale * 20) / 100; // Sconto 20% per i minorenni
  console.log(sconto);
  prezzoFinale = prezzoIniziale - sconto;
} else if (etaPasseggero > 65) {
  sconto = (prezzoIniziale * 40) / 100; // Sconto 40% per over 65
  console.log(sconto);
  prezzoFinale = prezzoIniziale - sconto;
}

// * il prezzo finale in decimali

let prezzoFormattato = prezzoFinale.toFixed(2);

// ! OUTPUT Stampo il prezzo
const prezzoStampato = `Il prezzo del biglietto è: ${prezzoFormattato} €`;
console.log(prezzoStampato);

alert(`Il prezzo del biglietto è: ${prezzoFormattato} €`);
