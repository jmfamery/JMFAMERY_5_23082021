import {afficherUneCamera} from "../vues/cameraview.js"
import { getAllCameras} from "../api/api.js"

getAllCameras().then((cameras) => {
    cameras.forEach(camera => {
        document.getElementById("appareil").appendChild(afficherUneCamera(camera));
    });
})