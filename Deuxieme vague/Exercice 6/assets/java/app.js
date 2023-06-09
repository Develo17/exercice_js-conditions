function inverserChaine(chaine) {
    let chaineInverse = '';
  
    for (let i = chaine.length - 1; i >= 0; i--) {
      chaineInverse += chaine[i];
    }
  
    return chaineInverse;
  }
  
  
  let chaine = 'Bonjour';
  let chaineInversee = inverserChaine(chaine);
  console.log(chaineInversee);