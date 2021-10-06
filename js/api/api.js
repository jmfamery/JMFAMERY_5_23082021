import {Camera} from "../modeles/camera.js";
import {Confirmation} from "../modeles/confirmation.js";

// récupération des cameras
export async function getAllCameras() {
  try {
    let response = await fetch('http://localhost:3000/api/cameras');
    let camerasDonnees = await response.json();
    let cameras = [];
    camerasDonnees.forEach(cameraDonnees => {
      let camera = new Camera(cameraDonnees);
      cameras.push(camera);
    });
    return cameras;
  } catch (erreur) {
    alert(erreur)
  }
}

// récupération d'une camera
export async function getOneCamera(_id) {
  try {
    let response = await fetch(`http://localhost:3000/api/cameras/${_id}`);
    let cameraDonnees = await response.json();
    let camera = new Camera(cameraDonnees);
    return camera;
  } catch (erreur) {
    alert(erreur)
  }
}

// envoi de la commande au back-end et récupération du numéro de commande
export async function orderCameras(transfert) {
  try {
    let response = await fetch(`http://localhost:3000/api/cameras/order`, {
      method : `POST`,
      body : JSON.stringify(transfert),
      headers : {
        'Content-Type': 'application/json'
      }
    })
    let resultat = await response.json();
    let confirmation = new Confirmation(resultat)
    return confirmation
  } catch (erreur) {
    alert(erreur)
  }
}