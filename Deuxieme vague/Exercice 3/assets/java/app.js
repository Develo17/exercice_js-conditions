function ChainesLongues(tableau) {
    let count = 0;
  
    for (let i = 0; i < tableau.length; i++) {
      if (tableau[i].length > 5) {
        count++;
      }
    }
  
    return count;
  }
  
  let chaines = ["abc", "defgh", "ijklmno", "pqrstu", "vwxyz"];
  let resultat = ChainesLongues(chaines);
  console.log(resultat); 