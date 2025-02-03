// Toutes les questions doivent faire appel à cette fonction
// Chaque question est indépendante, et se base sur ce tableau initial
function getEmployees() {
  return [
    { name: "Thomas", age: "30" },
    { name: "Theo", age: "25" },
    { name: "Philippe", age: "45" },
    { name: "Jeremy", age: "28" },
    { name: "Minnie", age: "50" },
  ];
}

module.exports = {
  // 1) Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un "e"
  B1() {
    let personne = getEmployees();
    return personne.filter(x => x.name.endsWith('e'));
  },

  // 2) Trouver la première personne dont l'âge est inférieur à 30
  B2() {
    let personne = getEmployees();
    return personne.find(x => parseInt(x.age) < 30);
  },

  // 3) Renvoyer l'index où se trouve "Jeremy"
  B3() {
    let personne = getEmployees();
    return personne.findIndex(x => x.name === "Jeremy");
  },

  // 4) Trier le tableau par âge des personnes
  B4() {
    let personne = getEmployees();
    return personne.sort((a, b) => parseInt(a.age) - parseInt(b.age));
  },

  // 5) Ajouter Kasimu à la fin du tableau, il a 38 ans, et renvoyer le tableau modifié
  B5() {
    let personne = getEmployees();
    personne.push({ name: "Kasimu", age: 38})
    return personne;
  },

  // 6) Renvoyer la longueur du tableau
  B6() {
    let personne = getEmployees();
    return personne.length;
  },

  // 7) Remplacer le "o" de Theo par un "a", et renvoyer le tableau modifié
  B7() {
    let personne = getEmployees();
    let theo = personne.findIndex(x => x.name === "Theo");
    if (theo !== -1) {
      personne[theo].name = personne[theo].name.replace('o', 'a');
    }
    return personne;
  },

  // 8) Renvoyer un tableau qui ne contient que les personnes ayant au moins un "e" dans leur nom
  B8() {
    let personne = getEmployees();
    return personne.filter(x => x.name.includes('e'));
  },
};