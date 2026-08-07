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