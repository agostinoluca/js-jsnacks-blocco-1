/* 

Snack 2
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

*/

const inputNomi = ['FRANCO', 'GIUSEPPE', 'roberto', 'claudio', 'ERNESTO'];

const outputNomi = inputNomi.map(nome => {
    const nomeFormattato = nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    
    return nomeFormattato;
  });
  
  console.log(outputNomi);


/*   const outputNomi = inputNomi.map(function(nome) {
    const nomeFormattato = nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    
    return nomeFormattato;
  });
  
  console.log(outputNomi); */