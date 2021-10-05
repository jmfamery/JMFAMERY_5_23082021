import {Cordonnees} from "../modeles/cordonnees.js"
import {Panier} from "../modeles/panier.js"
import {Commande} from "../modeles/commande.js"
import {afficherCordonnees} from "../vues/cordonneesVues.js"
import {Order} from "../modeles/order.js"
import {orderCameras} from "../api/api.js"

const formulaireElt = document.querySelector("#formulaire")

const cordonnees = new Cordonnees();
const panier = new Panier();
const commande = new Commande();
const order = new Order();

afficherCordonnees(cordonnees, formulaireElt, panier, commande, order);

const commandeNumero = " "

orderCameras().then((resultat) => {
  const numeroCommande = resultat.orderId
  console.log("numero commande Back-End : ",numeroCommande)
});

console.log("cordonnees : ",cordonnees)
console.log("commande :",commande)
console.log("Order cordonneesCtr : ",order)
console.log("commande numero : ", commandeNumero)