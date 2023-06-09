
function calculerSomme(tableau) {
    let somme = 0;
  
    for (let i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }
  
    return somme;
  }
  
  let nombres = [1, 2, 3, 4, 5];
  let resultat = calculerSomme(nombres);
  console.log(resultat);  