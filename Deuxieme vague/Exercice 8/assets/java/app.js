function NombresUniques(tableau) {
    let nombresUniques = [];
  
    for (let i = 0; i < tableau.length; i++) {
      let nombre = tableau[i];
      let occurrences = 0;
  
      for (let j = 0; j < tableau.length; j++) {
        if (tableau[j] === nombre) {
          occurrences++;
        }
      }
  
      if (occurrences === 1) {
        nombresUniques.push(nombre);
      }
    }
  
    return nombresUniques;
  }
  
  let tableau = [1, 2, 3, 4, 5, 1, 2, 3, 6];
  let nombresUniques = NombresUniques(tableau);
  console.log(nombresUniques);  