import {Cordonnees} from "../modeles/cordonnees.js"
import {Panier} from "../modeles/panier.js"
import {Commande} from "../modeles/commande.js"
//import {orderCameras} from "../api/api.js"
import {afficherCordonnees} from "../vues/cordonneesVues.js"
import {Contact} from "../modeles/contact.js"
import {Products} from "../modeles/products.js"

const formulaireElt = document.querySelector("#formulaire")

const cordonnees = new Cordonnees();
const panier = new Panier();
const commande = new Commande();
const contact = new Contact();
const products = new Products();

afficherCordonnees(cordonnees, formulaireElt, panier, commande, contact, products);

console.log("cordonnees : ",cordonnees)
console.log("contrat : ",contact)
console.log("products : ",products)

//orderCameras().then((contact) => {
  //document.getElementById("commande").appendChild(afficherUnAppareilPhoto(contact))
//})