function NombrePlusEleve(tableau) {
    let plusEleve = tableau[0];
  
    for (let i = 1; i < tableau.length; i++) {
      if (tableau[i] > plusEleve) {
        plusEleve = tableau[i];
      }
    }
  
    return plusEleve;
  }
  
  let nombres = [10, 5, 8, 15, 3, 12];
  let resultat = NombrePlusEleve(nombres);
  console.log(resultat); 