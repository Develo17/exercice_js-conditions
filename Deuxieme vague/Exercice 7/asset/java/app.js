function NombreCaracteres(tableau) {
    let totalCaracteres = 0;
  
    for (let i = 0; i < tableau.length; i++) {
      totalCaracteres += tableau[i].length;
    }
  
    return totalCaracteres;
  }
  

  let tableau = ['Bonjour', 'Monde', 'Bigbang'];
  let nombreCaracteres = NombreCaracteres(tableau);
  console.log(nombreCaracteres);  