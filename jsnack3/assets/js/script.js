/* 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
  { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
  { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi.
*/

// creo un'array di oggetti
const animalsList = [
    { 
        nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    },
    {
        nome: 'elefante', 
        famiglia: 'elefantidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'gatto', 
        famiglia: 'felidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'cavallo', 
        famiglia: 'equidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'aquila', 
        famiglia: 'accipitridi', 
        classe: 'uccelli' 
    },
    { 
        nome: 'tigre', 
        famiglia: 'felidi', 
        classe: 'mammiferi' 
    }
];


/* Soluzione utilizzata durante esercitazione

// creo una nuova array vuota per i mammiferi
let mammiferi = [];

// con un ciclo itero la lista
animalsList.forEach(animal => {
    console.log(animal.classe);    
    // con una condizione seleziono gli oggetti che come classe hanno "mammiferi"
    if (animal.classe === 'mammiferi') {
        // pusho dentro una nuova lista gli oggetti selezionati
        mammiferi.push(animal);
        console.log(mammiferi);
    }
});

*/



// soluzione con metodo .filter (correzione)
const mammiferi = animalsList.filter(animal => animal.classe === 'mammiferi');
console.log(mammiferi);