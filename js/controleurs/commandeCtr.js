import {Commande} from "../modeles/commande.js"
import {afficherCommande} from "../vues/commandeVues.js"

const commandeNumeroElt = document.querySelector("#commande-numero")
const commandeDetailElt = document.querySelector("#commande-detail")
const commandeTotallElt = document.querySelector("#commande-total")

const commande = new Commande();

console.log("commande : ",commande)

afficherCommande(commande, commandeNumeroElt, commandeDetailElt, commandeTotallElt);