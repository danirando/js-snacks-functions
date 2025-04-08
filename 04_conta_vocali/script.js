/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

function conteggioVocali() {
  let quanteVocali = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      quanteVocali = quanteVocali + 1;
    }
  }
  return quanteVocali;
}

// Invoca la funzione qui e stampa il risultato in console

conteggioVocali();

console.log(`Le vocali sono: ${conteggioVocali()}`);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

// uso arrow function

const conteggioVocaliArrow = () => {
  let quanteVocali = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      quanteVocali = quanteVocali + 1;
    }
  }
  return quanteVocali;
};

conteggioVocaliArrow();

console.log(`Le vocali sono: ${conteggioVocaliArrow()}`);
