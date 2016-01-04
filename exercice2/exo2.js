var liste = document.querySelector("#liste");
var texte = document.querySelector("#texte");
var btnAjouter = document.querySelector("#btnAjouter");
var btnAnnuler = document.querySelector("#btnAnnuler");
var tableau = ["Bernard", "Marjolaine", "Hubert"];

function afficherListe() {
    var elements = "";
    for (i = 0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    liste.innerHTML = elements;
}

function ajouter() {
    tableau.push(texte.value);
    afficherListe();
}

function annuler() {
    tableau.pop();
    afficherListe();
}

btnAjouter.onclick = ajouter;
btnAnnuler.onclick = annuler;
afficherListe();