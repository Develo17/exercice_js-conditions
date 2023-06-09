function NombrePremier(nombre) {
    if (nombre <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  let nombre = parseInt(prompt("Entrez un nombre :"));
  
  let estPremier = NombrePremier(nombre);
  
  if (estPremier) {
    console.log(nombre + " est un nombre premier.");
  } else {
    console.log(nombre + " n'est pas un nombre premier.");
  }