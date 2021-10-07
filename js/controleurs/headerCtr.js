import {Panier} from "../modeles/panier.js"
import {compteurPanier} from "../vues/headerVues.js"

// nombre des appareils photos dans le panier
const infoPanierElt = document.querySelector(".compteur-panier")

let panier = new Panier();

let compteurProduit = 0;
for (let numeroId = 0; numeroId < panier.donnees.length; numeroId++) {
    compteurProduit += panier.donnees[numeroId].number
  };

compteurPanier(compteurProduit, infoPanierElt)