import { Camera } from "../modeles/camera.js";

export async function getDesCameras() {
    let response = await fetch('http://localhost:3000/api/cameras');

    let camerasDonnees = await response.json();
    let cameras = [];
    let compteur = -1;
    camerasDonnees.forEach(cameraDonnees => {
        let camera = new Camera(cameraDonnees);
        compteur ++
        console.log(compteur);
        console.log(camerasDonnees[compteur]);
        cameras.push(camera);
    });
    return cameras;
}

export async function getUneCamera(_id){
    let response = await fetch('http://localhost:3000/api/cameras');

    let cameraDonnees = await response.json();
    let id = 0
    console.log(id)
    console.log(cameraDonnees[id])
    let camera = new Camera(cameraDonnees[id]);
    console.log(camera._id)
    return camera;
}

export async function getPanierDetail(_panier){
    let response = await fetch('http://localhost:3000/api/cameras');

    let camerasDonnees = await response.json();
    let cameras = [];
    let compteur = -1;
    let totalprice = 0;
    camerasDonnees.forEach(cameraDonnees => {
        let camera = new Camera(cameraDonnees);
        compteur ++
        console.log(compteur);
        totalprice = totalprice + camera.price
        console.log(totalprice)
        console.log(camerasDonnees[compteur]);
        cameras.push(camera);
    });
    return cameras;
}

export async function getPanierTotal(_panier){
    let response = await fetch('http://localhost:3000/api/cameras');

    let cameraDonnees = await response.json();
    let id = 0
    console.log(id)
    console.log(cameraDonnees[id])
    let camera = new Camera(cameraDonnees[id]);
    console.log(camera._id)
    return camera;
}

export async function getCommande(_contact, _products){
    let response = await fetch('http://localhost:3000/api/cameras');

    let camerasDonnees = await response.json();
    let cameras = [];
    let compteur = -1;
    let totalprice = 0;
    camerasDonnees.forEach(cameraDonnees => {
        let camera = new Camera(cameraDonnees);
        compteur ++
        console.log(compteur);
        totalprice = totalprice + camera.price
        console.log(totalprice)
        console.log(camerasDonnees[compteur]);
        cameras.push(camera);
    });
    return cameras;
}