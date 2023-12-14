/* 
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

// creo un array di 10 oggetti rappresentanti zucchine (peso in grammi, lunghezza in centimetri)
const zucchineList = [
    {
        varietà: 'Zucchina Nera',
        peso: 100,
        lunghezza: 20
    },
    {
        varietà: 'Zucchina Romanesca',
        peso: 100,
        lunghezza: 15
    },
    {
        varietà: 'Zucchina Bianca',
        peso: 100,
        lunghezza: 22
    },
    {
        varietà: 'Zucchina Gialla',
        peso: 100,
        lunghezza: 18
    },
    {
        varietà: 'Zucchina Trombetta',
        peso: 100,
        lunghezza: 25
    },
    {
        varietà: 'Zucchina Genovese',
        peso: 100,
        lunghezza: 21
    },
    {
        varietà: 'Zucchina Tonda',
        peso: 100,
        lunghezza: 17
    },
    {
        varietà: 'Zucchina Lunga',
        peso: 100,
        lunghezza: 23
    },
    {
        varietà: 'Zucchina Costata',
        peso: 100,
        lunghezza: 19
    },
    {
        varietà: 'Zucchina Crookneck',
        peso: 100,
        lunghezza: 28
    }
];

// Creo una variabile per inserire la somma dei pesi
let pesoTotaleZucchine = 0;

// Utilizzo un ciclo for per sommare i pesi
for (const zucchina of zucchineList) {
    pesoTotaleZucchine += zucchina.peso;
};

// stampo in console il risultato
console.log(`Il peso totale di tutte le zucchine è di ${pesoTotaleZucchine} grammi.`);