import {Camera} from "../modeles/camera.js";

export async function getAllCameras() {
    let response = await fetch('http://localhost:3000/api/cameras');
    if (response.ok) {
        let camerasDonnees = await response.json();
        let cameras = [];
        camerasDonnees.forEach(cameraDonnees => {
            let camera = new Camera(cameraDonnees);
            cameras.push(camera);
        });
        return cameras;
    } 
    else {
        console.log("HTTP-Error: " + response.status);
    }
}

export async function getOneCamera(_id) {
    let response = await fetch(`http://localhost:3000/api/cameras/${_id}`);
    if (response.ok) {
        let cameraDonnees = await response.json();
        let camera = new Camera(cameraDonnees);
        return camera;
    }
    else {
        console.log("HTTP-Error: " + response.status);
    }
}

export async function getPanier() {
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
}

export async function getCommande() {
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
}

export async function orderCameras(_contact, _products) {

}