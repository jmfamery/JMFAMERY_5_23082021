import { Camera } from "../modeles/camera.js";

export async function getAllCameras() {
    let response = await fetch('http://localhost:3000/api/cameras');

    let camerasDonnees = await response.json();
    let cameras = [];
    camerasDonnees.forEach(cameraDonnees => {
        let camera = new Camera(cameraDonnees);
        cameras.push(camera);
    });
    return cameras;
}


export async function getOneCamera(id){
  // TODO
}


export async function commander(contact, products){
    // TODO
}