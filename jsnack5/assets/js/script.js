/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

// creo un array vuoto
const numberUser = [];

// creo un ciclo con un prompt
for (let i = 0; i < 6; i++) {
    const numberChoosen = parseInt(prompt('Scegli un numero intero'));
    console.log(numberChoosen);


// creo una condizione per stabilire quali numeri verranno salvati nella mia array
if (numberChoosen % 2 !== 0) {
    // se, dividendo per 2, restituisce un resto diverso da 0, viene inserito nella array
    numberUser.push(numberChoosen);
}

// stampo in pagina la array
const oddNumbers = document.querySelector('.number_choosen');
oddNumbers.innerHTML = (`Hai inserito i seguenti numeri dispari:<br>` + numberUser);
}