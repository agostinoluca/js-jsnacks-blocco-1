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

console.log('Hello World');

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
  ]

// con un ciclo itero la lista
animalsList.forEach(animal => {
    console.log(animal.classe);    
});

// con una condizione seleziono gli oggetti che come classe hanno "mammiferi"

// pusho dentro una nuova lista gli oggetti selezionati
