import {Cordonnees} from "../modeles/cordonnees.js"
import {Panier} from "../modeles/panier.js"
import {Commande} from "../modeles/commande.js"
import {afficherCordonnees} from "../vues/cordonneesVues.js"
import {Transfert} from "../modeles/transfert.js"
import {orderCameras} from "../api/api.js"

// récupération des données pour l'affichage de la page panier sur la partie cordonnéées
const formulaireElt = document.querySelector("#formulaire")

const cordonnees = new Cordonnees();
const panier = new Panier();
const commande = new Commande();
const transfert = new Transfert();

// validation de la commande
function validationCommande(transfert) {
  orderCameras(transfert.donnees).then((confirmation) => {
    const numeroCommande = confirmation.orderId
    sessionStorage.setItem('CommandeId',numeroCommande);
    window.location.href = "commande.html"          
  });
}

// affichage
afficherCordonnees(formulaireElt, cordonnees, panier, commande, transfert, validationCommande);