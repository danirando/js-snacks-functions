/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function iniziali() {
  const lettereIniziali = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    lettereIniziali.push(name[0]);
  }
  return lettereIniziali;
}

// Invoca la funzione qui e stampa il risultato in console

iniziali();
console.log(iniziali());

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

// uso arrow function

const inizialiArrow = () => {
  const lettereInizialiArrow = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    lettereInizialiArrow.push(name[0]);
  }
  return lettereInizialiArrow;
};

inizialiArrow();
console.log(inizialiArrow());
