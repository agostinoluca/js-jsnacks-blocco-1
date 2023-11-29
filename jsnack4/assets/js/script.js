/* 
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

    #Tools:
    -const
    -document.getElementById
    -Math.floor / Math.random
    -prompt
    -if / else
    -.innerHtml
    -alert

*/

// creo l'array con gli invitati
const listInvited = ['Luca', 'Giovanni', 'Roberto', 'Aldo', 'Federico'];

// inserisco in una costante il div che conterrà il messaggio di benvenuto
const welcome = document.getElementById('welcome');

// creo ed inserisco in una costante un numero casuale che identifica il numero attuale di ospiti
const invitedNumber = Math.floor(Math.random() * 1000) + 1;

// chiedo all'utente come si chiama
const userName = prompt('Come ti chiami?');

// creo una condizione per verificare se è un invitato
if (listInvited.includes(userName)) { 
    // l'utente è un invitato, lo accolgo con un messaggio di benvenuto
    welcome.innerHTML = `Ciao ${userName}!<br>Benvenuto alla grande festa,<br>sei l'ospite numero: ` + invitedNumber + `.`;
} else {
    // l'utente non è un invitato, lo respingo con un alert
    alert('Mi spiace, non sei gradito in questa festa.')
}
