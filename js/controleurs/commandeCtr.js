import {Commande} from "../modeles/commande.js"
import {afficherCommande} from "../vues/commandeVues.js"

// récupération des données pour l'affichage de la page commande
const commande = new Commande();

const commandeNumeroElt = document.querySelector("#commande-numero")
const commandeDetailElt = document.querySelector("#commande-detail")
const commandeTotallElt = document.querySelector("#commande-total")

let commandeId = sessionStorage.getItem('CommandeId');

if ((commandeId) == null) {
  commandeId = ""
}

// affichage
afficherCommande(commande, commandeNumeroElt, commandeDetailElt, commandeTotallElt, commandeId);  