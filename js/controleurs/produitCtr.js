import {afficherUnAppareilPhoto} from "../vues/produitVues.js"
import {getOneCamera} from "../api/api.js"
import {Panier} from "../modeles/panier.js"

function getUrlIdParametre() {
  let parametre = (new URL(document.location)).searchParams;
  let id = parametre.get('id');
  return id;
}

let cameraId = getUrlIdParametre();

let panier = new Panier();

getOneCamera(cameraId).then((camera) => {
  document.getElementById("appareil").appendChild(afficherUnAppareilPhoto(camera, panier))
  console.log ("camera : ",camera," & panier : ",panier)
})