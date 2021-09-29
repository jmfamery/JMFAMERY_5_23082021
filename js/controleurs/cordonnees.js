import {Cordonnees} from "../modeles/cordonnees.js"
import {afficherCordonnees} from "../vues/cordonneesvues.js"

const formulaireElt = document.querySelector("#formulaire")

const cordonnees = new Cordonnees();

console.log("cordonnees.donnees : ", cordonnees.donnees);

afficherCordonnees(cordonnees, formulaireElt);