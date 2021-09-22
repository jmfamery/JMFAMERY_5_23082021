import {Panier} from "../modeles/panier.js"
import {afficherPanier} from "../vues/paniervues.js"

const panierDetailElt = document.querySelector("#panier-detail")
const panierTotalElt = document.querySelector("#panier-total")

const panier = new Panier();
console.log(panier);

afficherPanier(panier, panierDetailElt, panierTotalElt);