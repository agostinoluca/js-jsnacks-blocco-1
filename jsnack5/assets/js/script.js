/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

// creo un array vuoto
const numberUser = [];

// creo un ciclo con un prompt
for (let i = 0; i < 6; i++) {
    const numberChoose = prompt('Scegli un numero intero');
    console.log(numberChoose);    
}

// creo una condizione per stabilire quali numeri verranno salvati nella mia array

// stampo in pagina la mia array