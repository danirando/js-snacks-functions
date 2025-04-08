/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.

function saluto() {
  const oraCorrente = new Date().getHours();
  let saluto = "";
  if (oraCorrente < 13) {
    saluto = "Buongiorno " + name;
  } else if (oraCorrente > 13 && oraCorrente < 17) {
    saluto = "Buon pomeriggio " + name;
  } else saluto = "Buonasera " + name;
  return saluto;
}

// Invoca la funzione qui e stampa il risultato in console

saluto();
console.log(saluto());
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

// uso arrow function

const salutoArrow = () => {
  const oraCorrente = new Date().getHours();
  let saluto = "";
  if (oraCorrente < 13) {
    saluto = "Buongiorno " + name;
  } else if (oraCorrente > 13 && oraCorrente < 17) {
    saluto = "Buon pomeriggio " + name;
  } else saluto = "Buonasera " + name;
  return saluto;
};

salutoArrow();
console.log(salutoArrow());
