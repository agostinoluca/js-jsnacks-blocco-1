/* 

Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.

*/

const carList = [
    {
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'gpl'
    },
    {
        marca: 'Fiat',
        modello: 'Tipo',
        alimentazione: 'benzina'
    },
    {
        marca: 'Alfa Romeo',
        modello: 'Giulietta',
        alimentazione: 'diesel'
    },
    {
        marca: 'Toyota',
        modello: 'Yaris',
        alimentazione: 'metano'
    },
    {
        marca: 'Lancia',
        modello: 'Ypsilon',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Lancia',
        modello: 'Delta',
        alimentazione: 'gpl'
    },
    {
        marca: 'Fiat',
        modello: '500',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Lamborghini',
        modello: 'Diablo',
        alimentazione: 'benzina'
    },
    {
        marca: 'Peugeot',
        modello: '208',
        alimentazione: 'benzina'
    },
    {
        marca: 'Tesla',
        modello: 'Hydra',
        alimentazione: 'elettrico'
    }
];

const benzinaArray = carList.filter(function(car) {
    return car.alimentazione === 'benzina';
});
console.log(benzinaArray);


const dieselArray = carList.filter(car => {
    return car.alimentazione === 'diesel';
});
console.log(dieselArray);


const varieAlimentazioniArray = carList.filter(car => {
    return car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel';
});
console.log(varieAlimentazioniArray);