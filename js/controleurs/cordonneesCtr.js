import {Cordonnees} from "../modeles/cordonnees.js"
import {Panier} from "../modeles/panier.js"
import {Commande} from "../modeles/commande.js"
import {afficherCordonnees} from "../vues/cordonneesVues.js"
import {Contact} from "../modeles/contact.js"
import {Products} from "../modeles/products.js"
import {Order} from "../modeles/order.js"

const formulaireElt = document.querySelector("#formulaire")

const cordonnees = new Cordonnees();
const panier = new Panier();
const commande = new Commande();
const contact = new Contact();
const products = new Products();
const order = new Order();

export const ordreCommande = {contact, products}

afficherCordonnees(cordonnees, formulaireElt, panier, commande, contact, products, ordreCommande);

console.log("cordonnees : ",cordonnees)
console.log("contrat : ",contact)
console.log("products : ",products)
console.log("ordre de commande : ",ordreCommande)
console.log("Order : ",order)