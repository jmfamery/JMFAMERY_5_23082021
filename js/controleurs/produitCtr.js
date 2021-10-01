import {afficherUnAppareilPhoto} from "../vues/produitVues.js"
import {getOneCamera} from "../api/api.js"
import {Panier} from "../modeles/panier.js"

function getUrlIdParam() {
  let params = (new URL(document.location)).searchParams;
  let id = params.get('id');
  return id;
}

let cameraId = getUrlIdParam();

let panier = new Panier();

getOneCamera(cameraId).then((camera) => {
  document.getElementById("appareil").appendChild(afficherUnAppareilPhoto(camera, panier))
})