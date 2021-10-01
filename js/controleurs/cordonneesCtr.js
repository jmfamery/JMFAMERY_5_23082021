import {Cordonnees} from "../modeles/cordonnees.js"
import {Panier} from "../modeles/panier.js"
import {Commande} from "../modeles/commande.js"
import {orderCameras} from "../api/api.js"
import {afficherCordonnees} from "../vues/cordonneesVues.js"
//import {Contact} from "../modeles/contact.js"

const formulaireElt = document.querySelector("#formulaire")

const cordonnees = new Cordonnees();
const panier = new Panier();
const commande = new Commande();
//const contact = new Contact();

afficherCordonnees(cordonnees, formulaireElt, panier, commande);

orderCameras().then((contact) => {
  //document.getElementById("commande").appendChild(afficherUnAppareilPhoto(contact))
})

//console.log(contact)