console.log("Bonjour depuis JavaScript !");

let prenom = "John";
console.log("Je m'appelle "  + prenom);

let age = 37;
let ville = "Mananjary";
console.log("Je m'appelle " +  prenom + ", j'ai " + age + " ans, et j'habite à " + ville + ".");
let bouton = document.getElementById("mon-bouton");
let zoneMessage = document.getElementById("message");
bouton.addEventListener("click", function() { zoneMessage.textContent ="Tu as cliqué sur le bouton !";
});

let ageUtilisateur = 7;

if (ageUtilisateur < 18) {
    console.log("Tu es mineur.");
} else if (ageUtilisateur < 65) {
    console.log("Tu es majeur.");
} else {(ageUtilisateur >=65)
    console.log("Tu es senior.");
}let boutonAge = document.getElementById("bouton-age");
let resultatAge = document.getElementById("resultat-age")

boutonAge.addEventListener("click", function() {
let champAge = document.getElementById("champ-age")
let valeurAge = champAge.value;
 if (valeurAge < 18) { 
    resultatAge.textContent = "Tu es mineur.";
  } else if (valeurAge < 65) {
    resultatAge.textContent = "Tu es majeur.";
  } else { 
    resultatAge.textContent = "Tu es senior.";
  }
});
for (let i = 1; i <= 10; i++) {
    console.log("Tour numero " + i);
}
let passion = ["la nage","le foot","l'internet","le trading"];
for (let i = 0; i < passion.length; i++) {
    console.log("Passion : " + passion[i]);
}
let competences = ["HTML", "CSS","JavaScript", "Git"];
let listeCompetences = document.getElementById("liste-competences");

for (let i = 0; i < competences.length; i++) {
    let nouvelElement = document.createElement("li");
    nouvelElement.textContent = competences[i];
    listeCompetences.appendChild(nouvelElement);
}