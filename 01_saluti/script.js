/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.

function saluto() {
  let ciao = `Ciao ${userName}`;
  return ciao;
}

// Invoca la funzione qui e stampa il risultato in console

saluto();
console.log(saluto());
//Risultato atteso se si passa 'Mario': // ciao Mario

// uso arrow function

const salutoArrow = () => {
  let ciaoArrow = `Ciao ${userName}`;
  return ciaoArrow;
};

console.log(salutoArrow());
