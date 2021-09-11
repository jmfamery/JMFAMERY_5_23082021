import { Camera } from "../modeles/camera.js";

export async function getDesCameras() {
    let response = await fetch('http://localhost:3000/api/cameras');

    let camerasDonnees = await response.json();
    let cameras = [];
    console.log(camerasDonnees)
    camerasDonnees.forEach(cameraDonnees => {
        let camera = new Camera(cameraDonnees);
        let reference = camera._id
        console.log(reference)
        cameras.push(camera);
    });
    return cameras;
}

export async function getUneCamera(_id){
    let response = await fetch('http://localhost:3000/api/cameras');

    let cameraDonnees = await response.json();
    console.log(cameraDonnees[1])
    let camera = new Camera(cameraDonnees[1]);
    return camera;
}

export async function commander(_contact, _products){
    // TODO
}