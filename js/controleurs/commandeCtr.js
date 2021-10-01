import {Commande} from "../modeles/commande.js"
import {afficherCommande} from "../vues/commandeVues.js"

const commandeDetailElt = document.querySelector("#commande-detail")
const commandeTotallElt = document.querySelector("#commande-total")

const commande = new Commande();

afficherCommande(commande, commandeDetailElt, commandeTotallElt);