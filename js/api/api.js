import {Camera} from "../modeles/camera.js";
import {Contact} from "../modeles/contact.js"
import {Products} from "../modeles/products.js";

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

export async function orderCameras(_contact, _products) {
  try {
    let response = await fetch(`http://localhost:3000/api/contact/${_contact},${_products}`, {
      method : `POST`,
      body : JSON.stringify(Contact, Products),
      headers : {
        'Content-Type': 'application/json'
      }
    })

    let result = await response.json();
    alert(result.message);
  } catch (erreur) {
    alert(erreur)
  }
}