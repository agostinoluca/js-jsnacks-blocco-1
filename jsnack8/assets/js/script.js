/* 
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

    #Tools:
    -document.querySelector()
    -const
    -prompt
    -.split (serve per dividere l'input in più elementi di un'array)
    -.map(Number) restituisce gli elemnti appena suddivisi in numeri
    -/^\d{4}$/.test() verifica che sia inserito un numero di 4 cifre (boolean true/false).
*/

// chiedo un numero di quattro cifre all'utente con un  prompt inserendolo in una costante
const inputNumber = prompt('Inserisci un numero di quattro cifre');

// creo una condizione per verificare se è stato inserito un numero con sole 4 cifre come richiesto
if (/^\d{4}$/.test(inputNumber)) {

    // chiedo a javascript di sommare i singoli numeri contenuti nella cifra inserita
    const listNumber = inputNumber.split('');

    // inserisco una variabile con valore 0 per utilizzarla nella somma
    let sum = 0;

    // creo un ciclo for che itera la array fino a quando .lenght non restituisce 0
    for (let i = 0; i < listNumber.length; i++) {
        // chiedo di sommare tutti gli index alla variabile sum
        sum += (parseInt(listNumber[i]));
    }

    // stampo in pagina la somma finale
    const FinalSum = document.querySelector('.sum');
    FinalSum.innerHTML = (`Hai inserito il numero ${inputNumber}.<br>La somma delle sue singole cifre è:<br>${sum}`);

} else {
    // chiedo all' utente di prestare attenzione alle istruzioni del prompt
    alert('Per favore, segui le istruzioni.\nTi ho chiesto un numero di 4 cifre!');
    // al click su ok dell'alert, faccio aggiornare la pagina
    window.location.reload();
}

