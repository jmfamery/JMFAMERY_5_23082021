import {getOneCamera} from "../api/api.js"
import {Panier} from "../modeles/panier.js"
import {afficherUnAppareilPhoto} from "../vues/produitVues.js"

// récupération des données pour l'affichage d'un appareil photo
function getUrlIdParametre() {
  let parametre = (new URL(document.location)).searchParams;
  let id = parametre.get('id');
  return id;
}

let cameraId = getUrlIdParametre();

// récupération des données pour la validation pour le panier
let panier = new Panier();

// affichage et validation pour le panier d'un appareil photo
getOneCamera(cameraId).then((camera) => {
  document.getElementById("appareil").appendChild(afficherUnAppareilPhoto(camera, panier))
})