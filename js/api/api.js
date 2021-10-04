import {Camera} from "../modeles/camera.js";

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

//import {ordreCommande} from "../controleurs/cordonneesCtr.js";
import {Order} from "../modeles/order.js";

export async function orderCameras(_contact, _porducts) {
  try {
    let response = await fetch(`http://localhost:3000/api/cameras/order`, {
      method : `POST`,
      body : JSON.stringify(Order),
      headers : {
        'Content-Type': 'application/json'
      }
    })

    let result = await response.json();
    alert(result.message);
    console.log("retour backend ok : ",result.message)
  } catch (erreur) {
    alert(erreur)
    console.log("retour backend Ko : ",erreur)
  }
}