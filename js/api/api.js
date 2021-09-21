import {
  Camera
} from "../modeles/camera.js";
import {
  Panier
} from "../modeles/panier.js"

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

// export function getPanier() {
//   try {
//     let panierLocalStorage = JSON.parse(localStorage.getItem("panier"));
//     console.log(panierLocalStorage)
//     return panierLocalStorage
//   } catch (erreur) {
//     alert(erreur)
//   }
// }

// export async function getPanier() {
//   try {
//     let response = await fetch('http://localhost:3000/api/cameras');
//     let camerasDonnees = await response.json();
//     let cameras = [];
//     let totalprice = 0;
//     camerasDonnees.forEach(cameraDonnees => {
//       let camera = new Camera(cameraDonnees);
//       totalprice = totalprice + camera.price
//       console.log(totalprice)
//       cameras.push(camera);
//     });
//     return cameras;
//   } catch (erreur) {
//     alert(erreur)
//   }
// }

export async function getCommande() {
  try {
    let response = await fetch('http://localhost:3000/api/cameras');
    let camerasDonnees = await response.json();
    let cameras = [];
    let totalprice = 0;
    camerasDonnees.forEach(cameraDonnees => {
      let camera = new Camera(cameraDonnees);
      totalprice = totalprice + camera.price
      console.log(totalprice)
      cameras.push(camera);
    });
    return cameras;
  } catch (erreur) {
    alert(erreur)
  }
}

export async function orderCameras(_contact, _products) {

}