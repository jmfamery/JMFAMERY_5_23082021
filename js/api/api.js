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

export async function orderCameras(_order) {
  try {
    let response = await fetch(`http://localhost:3000/api/cameras/order`, {
      method : `POST`,
      body : JSON.stringify(JSON.parse(sessionStorage.getItem("order"))),
      headers : {
        'Content-Type': 'application/json'
      }
    })

    let resultat = await response.json();
    alert(resultat.orderId);
    console.log("retour back-End ok : ",resultat)
    return resultat
  } catch (erreur) {
    alert(erreur)
    console.log("retour back-End Ko : ",erreur)
  }
}