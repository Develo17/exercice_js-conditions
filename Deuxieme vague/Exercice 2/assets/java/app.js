function NombresPairs(tableau) {
    let tableauPairs = [];
  
    for (let i = 0; i < tableau.length; i++) {
      if (tableau[i] % 2 === 0) {
        tableauPairs.push(tableau[i]);
      }
    }
  
    return tableauPairs;
  }
  
  let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let nombresPairs = NombresPairs(nombres);
  console.log(nombresPairs);  