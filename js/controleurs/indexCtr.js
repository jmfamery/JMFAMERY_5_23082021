import {afficherDesAppareilsPhoto} from "../vues/indexVues.js"
import {getAllCameras} from "../api/api.js"

getAllCameras().then((cameras) => {
    cameras.forEach(camera => {
        document.getElementById("appareils").appendChild(afficherDesAppareilsPhoto(camera));
        console.log("camera : ",camera)
    });
})

