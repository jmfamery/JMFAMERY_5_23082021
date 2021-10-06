import {Panier} from "../modeles/panier.js"
import {afficherPanier} from "../vues/panierVues.js"

// récupération des données pour l'affichage de la page panier
const panierDetailElt = document.querySelector("#panier-detail")
const panierTotalElt = document.querySelector("#panier-total")

const panier = new Panier();

// affichage
afficherPanier(panier, panierDetailElt, panierTotalElt);