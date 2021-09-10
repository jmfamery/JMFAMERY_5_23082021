import { Camera } from "../modeles/camera.js";

export async function getDesCameras() {
    let response = await fetch('http://localhost:3000/api/cameras');

    let camerasDonnees = await response.json();
    let cameras = [];
    camerasDonnees.forEach(cameraDonnees => {
        let camera = new Camera(cameraDonnees);
        cameras.push(camera);
    });
    return cameras;
}

export async function getUneCamera(id){
    let response = await fetch('http://localhost:3000/api/cameras');

    let cameraDonnees = await response.json();
    let camera = `5be1ed3f1c9d44000030b061`;
    cameraDonnees => {
        let camara = new Camera(cameraDonnees);
        camera.push(camera);
    };
    return camera;
}


export async function commander(contact, products){
    // TODO
}