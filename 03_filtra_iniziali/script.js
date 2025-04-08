/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function inizialeA() {
  const iniziale = "A";
  let nomiConInizialeA = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name[0] === iniziale) {
      nomiConInizialeA.push(name);
    }
  }
  return nomiConInizialeA;
}

// Invoca la funzione qui e stampa il risultato in console

inizialeA();

console.log(inizialeA());

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// uso arrow function

const inizialeAArrow = () => {
  const iniziale = "A";
  let nomiConInizialeA = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name[0] === iniziale) {
      nomiConInizialeA.push(name);
    }
  }
  return nomiConInizialeA;
};

console.log(inizialeAArrow());
