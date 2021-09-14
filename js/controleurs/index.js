import {afficherDesAppareilsPhoto} from "../vues/indexvues.js"
import {getAllCameras} from "../api/api.js"

getAllCameras().then((cameras) => {
    cameras.forEach(camera => {
        document.getElementById("appareils").appendChild(afficherDesAppareilsPhoto(camera));
    });
})