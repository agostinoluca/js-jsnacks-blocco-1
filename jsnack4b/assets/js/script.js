/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

// creo un array di persone e rispettive informazioni (nome, cognome ed età)
const peopleList = [
    {
        nome: 'Luca',
        cognome: 'Agostino',
        età: 34
    },
    {
        nome: 'Giorgio',
        cognome: 'Olteri',
        età: 17
    },
    {
        nome: 'Massimo',
        cognome: 'Caruso',
        età: 58
    },
    {
        nome: 'Ferdinando',
        cognome: 'La Monaca',
        età: 48
    },
    {
        nome: 'Federico',
        cognome: 'Calvo',
        età: 14
    },
];


// con map creo un array di persone con per ognuna di esse una frase se può o meno guidare
const peopleDrive = peopleList.map(person => {
    if (person.età >= 18) {
        console.log(`Ciao ${person.nome} ${person.cognome}, sei autorizzato a guidare!`);
    } else {
        console.log(`Ciao ${person.nome} ${person.cognome}, ci spiace, non sei autorizzato a guidare, torna tra qualche anno.`);
    }
});